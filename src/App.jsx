import "./App.scss";
import Steps from "./modules/Steps";
import Cart from "./modules/Cart.jsx";

function App() {
  return (
    <main className="fixed w-full h-full flex bg-indigo-600">
      {/* <img
        style={{ zIndex: "-99" }}
        className="absolute object-cover h-full w-full"
        src="/wallpaper.jpg"
        alt="wallpaper"
      /> */}
      <div className="flex-grow p-8 relative">
        <div className="flex flex-col max-w-4xl mx-auto p-6 h-full rounded-3xl bg-black bg-opacity-80 shadow-md">
          <Steps />
          <Cart />
          <div className="flex justify-between items-center px-4">
            <button className="rounded-lg py-4 px-6 font-bold text-white border border-white border-opacity-10 bg-white bg-opacity-10 hover:bg-opacity-20">
              Go back
            </button>
            <button className="rounded-lg py-4 px-6 font-bold text-white bg-indigo-800 hover:bg-opacity-90">
              Continue to Shipping
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
