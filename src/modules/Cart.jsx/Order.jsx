export default function Order({
  each,
  increment,
  remove,
  decrement,
  currency,
}) {
  function decrementOrRemove() {
    if (each.count <= 1) return remove(each.id);
    decrement(each.id);
  }

  return (
    <div className="w-full pb-2 inline-block">
      <div className="flex justify-between items-center bg-white bg-opacity-5 hover:bg-opacity-10 rounded-lg py-4 px-6 font-medium text-lg text-white">
        <div>
          <h3 className="">{each.item.name}</h3>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <button
              onClick={() => increment(each.id)}
              className="focus:outline-none font-bold bg-white bg-opacity-20 py-1 px-3 w-10 rounded"
            >
              +
            </button>
            <p className="mx-2 w-5 text-center text-base opacity-70">
              {each.count}
            </p>
            <button
              onClick={decrementOrRemove}
              className="focus:outline-none font-bold bg-white bg-opacity-20 py-1 px-3 w-10 rounded"
            >
              -
            </button>
          </div>
          <p className="font-bold w-12 text-right text-xl">
            {each.item.price} {currency}
          </p>
        </div>
      </div>
    </div>
  );
}
