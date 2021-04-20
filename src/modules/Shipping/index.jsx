import { connect } from "react-redux";

function Shipping({ goTo }) {
  return (
    <>
      <div className="flex-grow">
        <div className="flex flex-col h-full px-4">
          <div className="mb-4">
            <h1 className="font-bold text-2xl text-white text-opacity-20">
              Where to ship
            </h1>
          </div>
          <div className="flex flex-col h-full">
            <p className="font-bold text-white text-2xl">Hello</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4">
        <button
          onClick={() => goTo("step1")}
          className="rounded-lg py-4 px-6 font-bold text-white border border-white border-opacity-10 bg-white bg-opacity-10 hover:bg-opacity-20"
        >
          Go back
        </button>
        <button
          onClick={() => goTo("step3")}
          className="rounded-lg py-4 px-6 font-bold text-white bg-indigo-800 hover:bg-opacity-90"
        >
          Continue to Payment
        </button>
      </div>
    </>
  );
}

const mapStateProps = () => {
  return {};
};

function mapDispatchProps(dispatch) {
  return {
    goTo: (step) => dispatch({ type: "NAVIGATE", payload: step }),
  };
}

export default connect(mapStateProps, mapDispatchProps)(Shipping);
