import "./App.css";
import MainPage from "./Project/MainPage";
import Banner from "./Project/Banner";
import Register from "./Project/Register";
import { BrowserRouter as Router, Route } from "react-browser-router";
import TestingAPI from "./Project/TestingAPI";

function App() {
  return (
    <div className="App backdrop">
      <Banner />

      <Router>
        <Route path="/Main" component={MainPage}></Route>
      </Router>
      <Router>
        <Route path="/Register" component={Register}></Route>
      </Router>
    </div>
  );
}

export default App;
