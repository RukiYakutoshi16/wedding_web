import myImage from "../img/HollyAndTrung.jpg";
import AboutUs from "./AboutUs";

function MainPage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <div className="img-container">
              <img src={myImage} />
            </div>
          </div>

          <div className="col-sm">
            <p className="wedding-title">Welcome</p>
            <hr />
            <h1>Trung and Holl's wedding</h1>
            <div>
              <h1>About Us</h1>
              <a>
                I like crab rangoon I like crab rangoon I like crab rangoon I
                like crab rangoon I like crab rangoon I like crab rangoon I like
                crab rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon I like crab rangoon I like crab rangoon I like crab
                rangoon
              </a>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
    </div>
  );
}

export default MainPage;
