import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./Fantasy_Kingdom/Pages/Home/HomeContainer/HomeContainer";
import Rides from "./Fantasy_Kingdom/Pages/Home/Rides/Rides";
import Contract from "./Fantasy_Kingdom/Pages/Contract/Contract";
import Footer from "./Fantasy_Kingdom/Pages/Shared/Footer";
import MyOrders from "./Fantasy_Kingdom/Pages/MyOrders/MyOrders";
import ManageAllOrders from "./Fantasy_Kingdom/Pages/ManageAllOrders/ManageAllOrders";
import AddRides from "./Fantasy_Kingdom/Pages/AddRides/AddRides";
import NotFound from "./Fantasy_Kingdom/Pages/NotFound/NotFound";
import Navbaar from "./Fantasy_Kingdom/Pages/Home/Header/Navbar/Navbaar";
import RidesPackage from "./Fantasy_Kingdom/Pages/RidesPackage/RidesPackage";
import PackageConfirmation from "./Fantasy_Kingdom/Pages/PackageConfirmation/PackageConfirmation";
import RouterTitle from "react-router-title";
import Login from "./Fantasy_Kingdom/Pages/Login/Login";
import AuthContext from "./Fantasy_Kingdom/Context/AuthContext";
import PrivateRoute from "./Fantasy_Kingdom/PrivateRoute/PrivateRoute";
// On Scroll Animation
Aos.init();

function App() {
  return (
    <AuthContext>
      <div className="App">
        <Router>
          <Navbaar />
          <Switch>
            <Route exact path="/">
              <RouterTitle
                pageTitle="Fantasy Kingdom"
                routesConfig={{ path: "/" }}
              />
              <HomeContainer />
            </Route>

            <Route path="/home">
              <RouterTitle
                pageTitle="Home | Fantasy Kingdom"
                routesConfig={{ path: "/home" }}
              />
              <HomeContainer />
            </Route>

            <Route path="/rides">
              <Rides />
            </Route>

            <Route path="/ridesPackage">
              <RouterTitle
                pageTitle="Rides Package | Fantasy Kingdom"
                routesConfig={{ path: "/ridesPackage" }}
              />
              <RidesPackage />
            </Route>

            <PrivateRoute path="/packageConfirmation/:packageId">
              <RouterTitle
                pageTitle="Buy Confirmation | Fantasy Kingdom"
                routesConfig={{ path: "/packageConfirmation/:packageId" }}
              />
              <PackageConfirmation />
            </PrivateRoute>

            <PrivateRoute path="/contract">
              <RouterTitle
                pageTitle="Contract | Fantasy Kingdom"
                routesConfig={{ path: "/contract" }}
              />
              <Contract />
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <RouterTitle
                pageTitle="My Order | Fantasy Kingdom"
                routesConfig={{ path: "/myOrders" }}
              />
              <MyOrders />
            </PrivateRoute>

            <PrivateRoute path="/addRides">
              <RouterTitle
                pageTitle="Add Rides | Fantasy Kingdom"
                routesConfig={{ path: "/addRides" }}
              />
              <AddRides />
            </PrivateRoute>

            <PrivateRoute path="/manageAllOrders">
              <RouterTitle
                pageTitle="Manage All Order | Fantasy Kingdom"
                routesConfig={{ path: "/manageAllOrders" }}
              />
              <ManageAllOrders />
            </PrivateRoute>

            <Route path="/login">
              <RouterTitle
                pageTitle="Login | Fantasy Kingdom"
                routesConfig={{ path: "/login" }}
              />
              <Login />
            </Route>
            {/* Page Not Found 404 */}
            <Route exact path="*">
              <RouterTitle
                pageTitle="404 Not Found | Fantasy Kingdom"
                routesConfig={{ path: "*" }}
              />
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthContext>
  );
}

export default App;
