import { connect } from "react-redux";

function Steps({ currentStep }) {
  const steps = [
    { id: "step1", title: "Pizzas" },
    { id: "step2", title: "Delivery" },
    { id: "step3", title: "Payment" },
    { id: "step4", title: "Receipt" },
  ];

  function isActive(id) {
    return id === currentStep;
  }

  return (
    <div className="flex justify-evenly font-bold text-white h-12 mb-7">
      {steps.map((step, ix) => (
        <div
          key={step.id}
          className={`${
            isActive(step.id) && "text-2xl"
          } flex flex-col items-center justify-between`}
        >
          <p className={`${!isActive(step.id) && "opacity-20"}`}>
            {step.title}
          </p>
          <div className="relative">
            <div
              className={`${
                !isActive(step.id) ? "bg-gray-700" : "bg-yellow-400"
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

const mapStateProps = ({ currentStep }) => {
  return { currentStep };
};

export default connect(mapStateProps)(Steps);
