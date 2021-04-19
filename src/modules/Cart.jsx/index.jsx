import Order from "./Order";
import { connect } from "react-redux";

function Cart({ cart }) {
  return (
    <div className="flex-grow">
      <div className="flex flex-col h-full px-4">
        <div className="mb-4">
          <h1 className="font-bold text-xl text-white text-opacity-20">Cart</h1>
        </div>
        <div className="flex h-full">
          <div className="flex-grow flex flex-wrap -ml-2 -mt-2">
            <div className="w-full">
              {cart.map((each) => (
                <Order key={each.id} each={each} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateProps)(Cart);
