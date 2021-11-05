import "./styles.css";
import Comp from "./comp";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Comp tunel="Menu" />
        <Comp tunel="Login" />
        <Comp tunel="CFG" />
      </div>
    </div>
  );
}
