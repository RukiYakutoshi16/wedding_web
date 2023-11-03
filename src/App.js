import "./App.css";
import MainPage from "./Project/MainPage";
import Banner from "./Project/Banner";
import { BrowserRouter } from "react-browser-router";

function App() {
  return (
    <div className="App">
      <Banner />
      <MainPage />
    </div>
  );
}

export default App;
