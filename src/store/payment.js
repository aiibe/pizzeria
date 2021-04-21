const initial = {
  cardNumber: "",
  cvv: "",
  expireDate: "",
};
function paymentReducer(state = initial, action) {
  switch (action.type) {
    case "ADD_PAYMENT":
      return { ...action.payload };

    default:
      return state;
  }
}

export default paymentReducer;
