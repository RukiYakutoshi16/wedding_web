import "./App.css";
import MainPage from "./Project/MainPage";
import Banner from "./Project/Banner";
import { BrowserRouter } from "react-browser-router";
import TestingAPI from "./Project/TestingAPI";

function App() {
  return (
    <div className="App">
      <Banner />
      <TestingAPI />
      <MainPage />
    </div>
  );
}

export default App;
