export default function Order({ each, increment, decrement }) {
  const currency = "€";
  return (
    <div className="w-full p-2 inline-block">
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
            <p className="mx-2 w-5 text-center">{each.count}</p>
            <button
              onClick={() => decrement(each.id)}
              className="focus:outline-none font-bold bg-white bg-opacity-20 py-1 px-3 w-10 rounded"
            >
              -
            </button>
          </div>
          <p className="font-bold w-10 text-right">
            {each.item.price} {currency}
          </p>
        </div>
      </div>
    </div>
  );
}
