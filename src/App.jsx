import "./App.css";
import Header from "./components/header/Header";
import RegisterComponent from "./components/register/RegisterComponent";
import TaxSimulator from "./components/taxSimulator/TaxSimulator";
import Testimony from "./components/testimony/Testimony";
import Footer from "./components/Footer/Footer";
import Solutions from "./components/Solutions/Solutions";

function App() {
  return (
    <>
      <Header />
      <Solutions />
      <TaxSimulator />
      <Testimony />
      <RegisterComponent />
      <Footer />
    </>
  );
}

export default App;
