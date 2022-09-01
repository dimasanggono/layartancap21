import Navigationbar from "./components/Navigationbar";
import "./App.css";
import "./style/Landingpage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="MyBg">
        <Navigationbar />
        <Intro />
      </div>
      {/* end of section */}
      <div className="trending">
        <Trending />
      </div>
      
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
