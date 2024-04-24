import "./App.css";
import Header from "./components/header/Header";
import RegisterComponent from "./components/register/RegisterComponent";
import TaxSimulator from "./components/taxSimulator/TaxSimulator";
import Testimony from "./components/testimony/Testimony";

function App() {
  return (
    <>
      <Header />
      <TaxSimulator />
      <Testimony />
      <RegisterComponent />
    </>
  );
}

export default App;
