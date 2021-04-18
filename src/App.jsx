import "./App.scss";

import { useState } from "react";
import Steps from "./modules/Steps";

function App() {
  // const [orders, setorders] = useState([]);
  const [menu, setMenu] = useState([
    {
      id: "hTg",
      name: "Norvegienne",
      ingredients: ["creme", "saumon fume", "crevettes", "emmental"],
    },
    {
      id: "nUt",
      name: "Savoyarde",
      ingredients: ["creme", "jambon", "reblochon", "emmental"],
    },
    {
      id: "ipG",
      name: "Tartuffe",
      ingredients: [
        "creme a la truffe",
        "jambon blanc",
        "roquette",
        "copeaux de parmesan",
        "truffe",
      ],
    },
  ]);
  const [currentStep, setcurrentStep] = useState("step1");
  const steps = [
    { id: "step1", title: "Pizzas" },
    { id: "step2", title: "Delivery" },
    { id: "step3", title: "Payment" },
    { id: "step4", title: "Receipt" },
  ];

  return (
    <main className="fixed w-full h-full flex bg-indigo-600">
      <div className="flex-grow p-8">
        <div className="flex flex-col max-w-4xl mx-auto p-6 h-full rounded-3xl bg-black bg-opacity-80 shadow-md">
          <Steps steps={steps} active={currentStep} />
          <div className="flex-grow">
            <div className="flex flex-col h-full px-4">
              <div className="mb-4">
                <h1 className="font-bold text-xl text-white text-opacity-20">
                  Menu
                </h1>
              </div>
              <div className="flex h-full">
                <div className="flex-grow flex flex-wrap -ml-2 -mt-2">
                  <div className="w-full">
                    {menu.map((item) => (
                      <div
                        key={item.id}
                        className="w-1/2 p-2 h-16 inline-block mb-3"
                      >
                        <div className="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer rounded-lg py-4 px-6 mb-3">
                          <h3 className="font-medium text-lg text-white text-center">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/3 ml-2 h-full bg-white bg-opacity-5 rounded-lg">
                  <div className="p-4">
                    <p className="font-bold text-white text-lg">Total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
