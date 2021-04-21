import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function Steps() {
  const location = useLocation();
  const steps = [
    { id: "step1", path: "/", title: "Pizzas" },
    { id: "step2", path: "/delivery", title: "Delivery" },
    { id: "step3", path: "/payment", title: "Payment" },
    { id: "step4", path: "/receipt", title: "Receipt" },
  ];

  function isActive(path) {
    return path === location.pathname;
  }

  return (
    <div className="flex justify-evenly font-bold text-white h-12 mb-7">
      {steps.map((step, ix) => (
        <div
          key={step.id}
          className={`${
            isActive(step.path) && "text-2xl"
          } flex flex-col items-center justify-between`}
        >
          <p className={`${!isActive(step.path) && "opacity-20"}`}>
            {step.title}
          </p>
          <div className="relative">
            <div
              className={`${
                !isActive(step.path) ? "bg-gray-700" : "bg-yellow-400"
              } absolute top-0 left-0 w-4 h-4 rounded-3xl z-10`}
            ></div>
            {ix !== steps.length - 1 && (
              <div className="absolute opacity-20 -bottom-2 left-0 border-t-2 w-36 md:w-48 ml-2 border-teal-700 border-dashed"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateProps = () => {
  return {};
};

export default connect(mapStateProps)(Steps);
