// Menu as a store for future modifications
const initial = [
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

function menuReducer(state = initial, action) {
  return state;
}

export default menuReducer;
