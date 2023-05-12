import './App.css';
import {Greet} from "./components/Greet"
import {About} from "./components/About"
import {Projects} from "./components/Projects"

function App() {
  return (
    <div className="App">
      <Greet name={"Daniel Ayala"}/>
      <About />
      <Projects />
    </div>
  );
}

export default App;
