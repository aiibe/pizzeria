export default function Steps({ steps, active }) {
  function isActive(id) {
    return id === active;
  }
  return (
    <div className="flex justify-evenly font-bold text-white h-12 mb-10">
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
                !isActive(step.id) ? "bg-gray-700 bg-opacity-100" : "bg-white"
              } absolute top-0 left-0 w-4 h-4 rounded-3xl z-10`}
            ></div>
            {ix !== steps.length - 1 && (
              <div className="absolute opacity-20 -bottom-2 left-0 border-t-2 w-44 ml-2 border-teal-700 border-dashed"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
