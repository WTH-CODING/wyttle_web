import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Components/Layout/NavigationBar";
import ProductPage from "./Components/Pages/ProductPage";
import FeedBack from "./Components/Pages/FeedBackPage";
import HomePage from "./Components/Pages/HomePage";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/_id" exact component={ProductPage} />
          <Route path="/leaderboard" exact component={FeedBack} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
