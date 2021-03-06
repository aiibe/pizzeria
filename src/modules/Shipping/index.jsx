import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const shippingSchema = Yup.object().shape({
  fullName: Yup.string().max(100, "Too long").required("Fullname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  fullAddress: Yup.string()
    .max(255, "Too long")
    .required("Full address is required"),
});

function Shipping({ delivery, submitForm }) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(shippingSchema) });

  // Form values
  const onSubmit = (values) => {
    submitForm(values);
    history.push("/payment");
  };

  return (
    <>
      <div className="flex-grow">
        <div className="flex flex-col h-full px-4">
          <div className="mb-4">
            <h1 className="font-bold text-2xl text-white text-opacity-20">
              Deliver at your door
            </h1>
          </div>
          <div className="flex h-full">
            <div className="flex flex-col w-4/5">
              <form
                className="flex flex-col text-white"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="relative flex mb-2 pb-6">
                  <label className="font-bold w-1/5 mr-4 text-right">
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    defaultValue={delivery.fullName}
                    className="placeholder-white placeholder-opacity-20 bg-white bg-opacity-10 flex-grow rounded py-4 px-3"
                    placeholder="Elon Musk"
                  />
                  <div className="absolute bottom-0 text-sm right-0 text-red-500">
                    {errors.fullName?.message}
                  </div>
                </div>

                <div className="relative flex mb-2 pb-6">
                  <label className="font-bold w-1/5 mr-4 text-right">
                    Full Address
                  </label>
                  <textarea
                    {...register("fullAddress")}
                    defaultValue={delivery.fullAddress}
                    rows={5}
                    className="placeholder-white h-auto resize-none placeholder-opacity-20 bg-white bg-opacity-10 flex-grow rounded py-4 px-3"
                    placeholder="45 rue du 1er mars 1943 &#13;&#10;69100 Villeurbanne"
                  />
                  <div className="absolute bottom-0 text-sm right-0 text-red-500">
                    {errors.fullAddress?.message}
                  </div>
                </div>
                <div className="relative flex mb-2 pb-6">
                  <label className="font-bold w-1/5 mr-4 text-right">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    defaultValue={delivery.email}
                    className="placeholder-white placeholder-opacity-20 bg-white bg-opacity-10 flex-grow rounded py-4 px-3"
                    placeholder="emusk@example.com"
                  />
                  <div className="absolute bottom-0 text-sm right-0 text-red-500">
                    {errors.email?.message}
                  </div>
                </div>
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4">
        <button
          onClick={() => history.push("/")}
          className="rounded-lg py-4 px-6 font-bold text-white border border-white border-opacity-5 bg-white bg-opacity-10 hover:bg-opacity-20"
        >
          Go back
        </button>
        {isValid ? (
          <button
            onClick={handleSubmit(onSubmit)}
            className="rounded-lg py-4 px-6 font-bold text-white bg-indigo-800 hover:bg-opacity-90"
          >
            Continue to Payment
          </button>
        ) : (
          <button className="rounded-lg py-4 px-6 font-bold text-white bg-indigo-800 opacity-10 cursor-default">
            Continue to Payment
          </button>
        )}
      </div>
    </>
  );
}

const mapStateProps = ({ delivery }) => {
  return { delivery };
};

function mapDispatchProps(dispatch) {
  return {
    submitForm: (values) => dispatch({ type: "ADD_DELIVERY", payload: values }),
  };
}

export default connect(mapStateProps, mapDispatchProps)(Shipping);
