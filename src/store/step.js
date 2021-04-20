const currentStep = "step1";
function stepReducer(state = currentStep, action) {
  switch (action.type) {
    case "NAVIGATE":
      return action.payload;

    default:
      return state;
  }
}

export default stepReducer;
