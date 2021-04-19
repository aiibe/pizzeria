import Order from "./Order";
import { connect } from "react-redux";

function Cart({ cart, removeOrder, incrementOrder, decrementOrder, currency }) {
  const total = cart.reduce(
    (sum, order) => (sum += order.count * order.item.price),
    0
  );
  return (
    <div className="flex-grow">
      <div className="flex flex-col h-full px-4">
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-white text-opacity-20">
            Cart
          </h1>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex-grow flex flex-wrap -ml-2 -mt-2">
            <div className="w-full">
              {cart.map((each) => (
                <Order
                  key={each.id}
                  each={each}
                  currency={currency}
                  increment={incrementOrder}
                  decrement={decrementOrder}
                  remove={removeOrder}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-end my-4">
            <div className="font-bold text-white text-2xl p-4">
              Total{" "}
              <span className="ml-4">
                {total} {currency}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateProps = ({ cart, currency }) => {
  return {
    cart,
    currency,
  };
};

function mapDispatchProps(dispatch) {
  return {
    incrementOrder: (id) =>
      dispatch({
        type: "INCREMENT",
        payload: id,
      }),
    decrementOrder: (id) =>
      dispatch({
        type: "DECREMENT",
        payload: id,
      }),
    removeOrder: (id) => dispatch({ type: "REMOVE", payload: id }),
  };
}

export default connect(mapStateProps, mapDispatchProps)(Cart);
