import React from "react";
import "./App.scss";
import "./styles/scan.scss";
import "./styles/home.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UserHome from "./Pages/User/UserHome";
import Scan from "./Pages/User/Scan";
import Cart from "./Pages/User/Cart";
import AddtoBag from "./Pages/User/AddtoBag";
import Profile from "./Pages/User/Profile";
import EditProfile from "./Pages/User/EditProfile";
import Payment from "./Pages/User/Payment";
import Orders from "./Pages/User/orders";
import Summary from "./Pages/User/Summary";
import BookingSummary from "./Pages/User/BookingSummary";
import OrdersReturns from "./Pages/User/Orders&Returns";
import Confirm from "./Pages/User/Confirm";
import Payments from "./Pages/User/Payments";
import HorizontalLabelPositionBelowStepper from "./Pages/User/AddtoCart/Stepper";
function App(props) {
  return (
    <Router>
      <div className="App">
        <div className="wrapper" style={{ width: "100%" }}>
          <Switch>
            <Route path="/user/home" component={UserHome} />
            <Route path="/scan" component={Scan} />
            <Route path="/cart" component={Cart} />
            <Route path="/addtobag" component={AddtoBag} />
            <Route path="/userProfile" component={Profile} />
            <Route path="/editProfile" component={EditProfile} />
            <Route path="/payment" component={Payment} />
            <Route path="/payments" component={Payments} />
            <Route path="/orders" component={Orders} />
            <Route path="/summary" component={Summary} />
            <Route path="/bookingsummary" component={BookingSummary} />
            <Route path="/returns" component={OrdersReturns} />
            <Route path="/confirm" component={Confirm} />
            <Route
              path="/addcart"
              component={HorizontalLabelPositionBelowStepper}
              props={props}
            />
            <Redirect to="/user/home" component={UserHome}></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
