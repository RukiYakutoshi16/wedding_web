import myImage from "../img/HollyAndTrung.jpg";

function MainPage() {
  return (
    <div>
      <h1>Hello</h1>
      <div className="img-container">
        <img src={myImage} />
      </div>
    </div>
  );
}

export default MainPage;
