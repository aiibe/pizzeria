import "./App.scss";

import { useState } from "react";
import Aside from "./modules/Aside";
import Header from "./modules/Header";

function App() {
  // order default state {set: false, done: false, paid: false}
  const [orders, setorders] = useState([
    {
      id: "xcF",
      name: "Souk",
      status: { set: false, done: false, paid: false },
    },
    {
      id: "gTv",
      name: "Alex",
      status: { set: true, done: false, paid: false },
    },
    { id: "trY", name: "Lidy", status: { set: true, done: true, paid: false } },
    {
      id: "tkP",
      name: "Alice",
      status: { set: true, done: true, paid: true },
    },
  ]);

  return (
    <main className="fixed w-full h-full flex bg-gray-900">
      <aside className="w-80">
        <Header />
        <Aside orders={orders} />
      </aside>
      <div className="flex-grow">
        <div className="mx-8 my-4 w-full h-full bg-indigo-400 bg-opacity-5 rounded-3xl"></div>
      </div>
    </main>
  );
}

export default App;
