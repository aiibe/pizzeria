import { connect } from "react-redux";
import Cart from "./modules/Cart";
import Shipping from "./modules/Shipping";

function Navigator({ currentStep }) {
  switch (currentStep) {
    case "step1":
      return <Cart />;
    case "step2":
      return <Shipping />;
    default:
      return null;
  }
}

function mapStateProps({ currentStep }) {
  return {
    currentStep,
  };
}

export default connect(mapStateProps)(Navigator);
