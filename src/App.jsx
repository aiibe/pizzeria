import "./App.scss";
import Navigator from "./Navigator";

function App() {
  return (
    <main className="fixed w-full h-full flex bg-indigo-600">
      <div className="flex-grow p-8 relative">
        <div className="flex flex-col max-w-4xl mx-auto p-6 h-full rounded-3xl bg-black bg-opacity-80 shadow-md">
          <Navigator />
        </div>
      </div>
    </main>
  );
}

export default App;
