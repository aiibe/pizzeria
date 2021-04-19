import { generateUID } from "../utils";

// Constant menu
const menu = [
  {
    id: "hTg",
    price: 10,
    name: "Norvegienne",
    ingredients: ["creme", "saumon fume", "crevettes", "emmental"],
  },
  {
    id: "nUt",
    price: 10,
    name: "Savoyarde",
    ingredients: ["creme", "jambon", "reblochon", "emmental"],
  },
  {
    id: "hPs",
    price: 10,
    name: "Tartare",
    ingredients: ["creme", "jambon", "tartare", "mozarella", "oeuf"],
  },
  {
    id: "ipG",
    price: 10,
    name: "Tartuffe",
    ingredients: [
      "creme a la truffe",
      "jambon blanc",
      "roquette",
      "copeaux de parmesan",
      "truffe",
    ],
  },
];

// Cart initial state
const initial = [
  {
    id: "uUpx",
    item: {
      id: "hTg",
      price: 10,
      name: "Norvegienne",
    },
  },
  {
    id: "yaUx",
    item: {
      id: "hPs",
      price: 10,
      name: "Tartare",
    },
  },
];

// Store reducer
function cartReducer(state = initial, action) {
  switch (action.type) {
    case "INCREMENT":
      return [
        ...state,
        {
          id: generateUID(),
          item: {
            ...menu.filter((item) => action.payload === item.id)[0],
          },
        },
      ];

    default:
      return state;
  }
}

export default cartReducer;
