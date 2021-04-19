export default function Order({ each }) {
  const currency = "€";
  return (
    <div className="w-full p-2 inline-block">
      <div className="flex justify-between items-center bg-white bg-opacity-5 hover:bg-opacity-10 rounded-lg py-4 px-6 font-medium text-lg text-white">
        <div>
          <h3 className="">{each.item.name}</h3>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <button className="focus:outline-none font-bold bg-white bg-opacity-20 py-1 px-3 w-10 rounded">
              +
            </button>
            <p className="mx-4">1</p>
            <button className="focus:outline-none font-bold bg-white bg-opacity-20 py-1 px-3 w-10 rounded">
              -
            </button>
          </div>
          <p className="font-bold">
            {each.item.price} {currency}
          </p>
        </div>
      </div>
    </div>
  );
}
