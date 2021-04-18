export default function Aside({ orders }) {
  return (
    <div>
      {orders.map((o) => (
        <>
          <div
            key={o.id}
            className="p-4 rounded-2xl mx-4 my-2 hover:bg-indigo-400 hover:bg-opacity-20 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-indigo-300 text-lg">{o.name}</h3>
              <small className="ml-2 text-indigo-300">
                {!o.status.set ? (
                  <small className="font-bold text-white bg-yellow-600 py-1 px-2 rounded-3xl">
                    Order not set
                  </small>
                ) : !o.status.done ? (
                  "...preparing"
                ) : (
                  "done"
                )}
                <span className="ml-2">
                  {o.status.paid ? "paid" : "not paid out"}
                </span>
              </small>
            </div>
            <div>
              <p className="text-indigo-300 text-opacity-50">x3 Pizzas</p>
            </div>
          </div>
          <div className="mx-4 pb-1 bg-gray-100 bg-opacity-5 rounded-full"></div>
        </>
      ))}
    </div>
  );
}
