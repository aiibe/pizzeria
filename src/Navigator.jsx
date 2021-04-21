import Steps from "./modules/Steps";
import Cart from "./modules/Cart";
import Payment from "./modules/Payment";
import Shipping from "./modules/Shipping";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navigator() {
  return (
    <Router>
      <Steps />
      <Switch>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/delivery">
          <Shipping />
        </Route>
        <Route path="/">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigator;
