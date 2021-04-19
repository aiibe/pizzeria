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
    count: 3,
  },
  {
    id: "yaUx",
    item: {
      id: "hPs",
      price: 9,
      name: "Tartare",
    },
    count: 1,
  },

  {
    id: "jIms",
    item: {
      id: "nUt",
      price: 10,
      name: "Savoyard",
    },
    count: 1,
  },
];

// Store reducer
function cartReducer(state = initial, action) {
  switch (action.type) {
    case "INCREMENT":
      return state.map((order) => {
        if (order.id === action.payload) {
          return {
            ...order,
            count: order.count + 1,
          };
        }
        return order;
      });

    case "DECREMENT":
      return state.map((order) => {
        if (order.id === action.payload) {
          return {
            ...order,
            count: order.count - 1,
          };
        }
        return order;
      });

    case "REMOVE":
      return state.filter((order) => order.id !== action.payload);

    default:
      return state;
  }
}

export default cartReducer;
