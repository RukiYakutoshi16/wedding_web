import myImage from "../img/HollyAndTrung.jpg";
import AboutUs from "./AboutUs";

function MainPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <h1>Trung and Holl Wedding Special</h1>
      <div className="img-container">
        <img src={myImage} />
      </div>
      <AboutUs />
    </div>
  );
}

export default MainPage;
