import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/NavBar/Navbar";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
