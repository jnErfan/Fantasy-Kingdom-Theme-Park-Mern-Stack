import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./Fantasy_Kingdom/Pages/Home/HomeContainer/HomeContainer";
import Rides from "./Fantasy_Kingdom/Pages/Home/Rides/Rides";
import RidesDetails from "./Fantasy_Kingdom/Pages/Home/RidesDetails/RidesDetails";
import Contract from "./Fantasy_Kingdom/Pages/Contract/Contract";
import Footer from "./Fantasy_Kingdom/Pages/Shared/Footer";
import Navbar from "./Fantasy_Kingdom/Pages/Home/Header/Navbar/Navbar";
import MyOrders from "./Fantasy_Kingdom/Pages/MyOrders/MyOrders";
import ManageAllOrders from "./Fantasy_Kingdom/Pages/ManageAllOrders/ManageAllOrders";
import AddRides from "./Fantasy_Kingdom/Pages/AddRides/AddRides";
import NotFound from "./Fantasy_Kingdom/Pages/NotFound/NotFound";
// On Scroll Animation
Aos.init();

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>

          <Route path="/home">
            <HomeContainer />
          </Route>

          <Route path="/rides">
            <Rides />
          </Route>

          <Route path="/ridesDetails">
            <RidesDetails />
          </Route>

          <Route path="/contract">
            <Contract />
          </Route>

          <Route path="/myOrders">
            <MyOrders />
          </Route>

          <Route path="/addRides">
            <AddRides />
          </Route>

          <Route path="/manageAllOrders">
            <ManageAllOrders />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
