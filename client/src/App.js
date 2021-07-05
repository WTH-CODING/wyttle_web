import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./Components/Layout/NavigationBar";
import ProductPage from "./Components/Pages/ProductPage";
import FeedBack from "./Components/Pages/FeedBackPage";
import HomePage from "./Components/Pages/HomePage";
import Footer from "./Components/Layout/Footer";
import Login from "./Components/User/Login";
import CartPage from "./Components/Pages/CartPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/_id" exact component={ProductPage} />
          <Route path="/leaderboard" exact component={FeedBack} />
          <Route path="/login" exact component={Login} />
          <Route path="/cart" exact component={CartPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
