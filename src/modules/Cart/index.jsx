import Order from "./Order";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Cart({ cart, removeOrder, incrementOrder, decrementOrder, currency }) {
  const history = useHistory();
  const total = cart.reduce(
    (sum, order) => (sum += order.count * order.item.price),
    0
  );
  const countItems = cart.reduce((sum, order) => (sum += order.count), 0);
  return (
    <>
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
              <div className="flex flex-col">
                <div className="flex justify-between items-end text-white opacity-50 px-4 w-56">
                  <span className="text-sm">Ordered</span>
                  <span className="tex-sm font-bold">x {countItems}</span>
                </div>
                <div className="flex justify-between items-end text-white px-4 w-56">
                  <span className="text-xl">Total</span>
                  <span className="font-bold text-3xl">
                    {total} {currency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4">
        <button className="rounded-lg py-4 px-6 font-bold text-white border border-white border-opacity-5 bg-white bg-opacity-10 hover:bg-opacity-20">
          Go back
        </button>
        {cart.length ? (
          <button
            onClick={() => history.push("/delivery")}
            className="rounded-lg py-4 px-6 font-bold text-white bg-indigo-800 hover:bg-opacity-90"
          >
            Continue to Delivery
          </button>
        ) : (
          <button className="rounded-lg py-4 px-6 font-bold text-white bg-indigo-800 opacity-10 cursor-default">
            Continue to Delivery
          </button>
        )}
      </div>
    </>
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
