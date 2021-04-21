import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const paymentSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(16, "Invalid card number")
    .max(16, "Invalid card number")
    .required("Card number is required"),
  expireDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Invalid format")
    .required("Card expire date required"),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid format")
    .required("CVC/CVV required"),
});

function Payment({ payment }) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(paymentSchema) });

  // Form values
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex-grow">
        <div className="flex flex-col h-full px-4">
          <div className="mb-4">
            <h1 className="font-bold text-2xl text-white text-opacity-20">
              Payment Method
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
                    Card Number
                  </label>
                  <input
                    {...register("cardNumber")}
                    defaultValue={payment.cardNumber}
                    className="placeholder-white placeholder-opacity-20 bg-white bg-opacity-10 flex-grow rounded py-4 px-3"
                    placeholder="xxxxxxxxxxxx0000"
                  />
                  <div className="absolute bottom-0 text-sm right-0 text-red-500">
                    {errors.cardNumber?.message}
                  </div>
                </div>

                <div className="relative flex mb-2 pb-6">
                  <label className="font-bold w-1/5 mr-4 text-right">
                    Expire Date
                  </label>
                  <input
                    {...register("expireDate")}
                    defaultValue={payment.expireDate}
                    className="placeholder-white placeholder-opacity-20 bg-white bg-opacity-10 flex-grow rounded py-4 px-3"
                    placeholder="MM/YY"
                  />
                  <div className="absolute bottom-0 text-sm right-0 text-red-500">
                    {errors.expireDate?.message}
                  </div>
                </div>
                <div className="relative flex mb-2 pb-6">
                  <label className="font-bold w-1/5 mr-4 text-right">
                    CVC/CVV
                  </label>
                  <input
                    {...register("cvv")}
                    defaultValue={payment.cvv}
                    className="placeholder-white placeholder-opacity-20 bg-white bg-opacity-10 flex-grow rounded py-4 px-3"
                    placeholder="000"
                  />
                  <div className="absolute bottom-0 text-sm right-0 text-red-500">
                    {errors.cvv?.message}
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
          onClick={() => history.goBack()}
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

const mapStateProps = ({ payment }) => {
  return { payment };
};

function mapDispatchProps(dispatch) {
  return {
    submitForm: (values) => dispatch({ type: "ADD_PAYMENT", payload: values }),
  };
}

export default connect(mapStateProps, mapDispatchProps)(Payment);
