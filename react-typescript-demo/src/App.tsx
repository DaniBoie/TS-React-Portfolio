import './App.css';
import {Greet} from "./components/Greet"
import {About} from "./components/About"

function App() {
  return (
    <div className="App">
      <Greet name={"Daniel Ayala"}/>
      <About />
    </div>
  );
}

export default App;
