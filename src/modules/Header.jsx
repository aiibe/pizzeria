export default function Header() {
  return (
    <div className="flex justify-between mx-4 py-4">
      <div className="">
        <h1 className="text-indigo-200 text-2xl font-bold">Pizzeria</h1>
      </div>
      <div className="w-36">
        <button className="focus:ring-0 bg-indigo-400 bg-opacity-20 hover:bg-opacity-30 text-sm text-indigo-300 font-bold rounded-2xl py-4 px-2">
          Ajouter une commande
        </button>
      </div>
    </div>
  );
}
