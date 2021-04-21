const initial = {
  fullName: "Souksavanh Syphanravong",
  email: "xasaks@example.com",
  fullAddress: "43 rue du 1er mars\n69100 Villeurbanne",
};
function deliveryReducer(state = initial, action) {
  switch (action.type) {
    case "ADD_DELIVERY":
      return action.payload;

    default:
      return state;
  }
}

export default deliveryReducer;
