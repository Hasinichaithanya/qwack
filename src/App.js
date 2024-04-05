import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="main-app-container">
      <div className="App">
        <Header />
        <div className="waves wave1"></div>
        <div className="waves wave2"> </div>
        <div className="waves wave3"></div>
        <div className="raising-sun"></div>
        <div className="home-btn-container">
          <div className="home-page-button">
            <h1>Word of the Day</h1>
          </div>
          <div className="home-page-button">
            <h1>Play Fun games</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
