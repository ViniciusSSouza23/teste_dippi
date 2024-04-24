import "./App.css";
import Header from "./components/header/Header";
import RegisterComponent from "./components/register/RegisterComponent";
import TaxSimulator from "./components/taxSimulator/TaxSimulator";
import Testimony from "./components/testimony/Testimony";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <TaxSimulator />
      <Testimony />
      <RegisterComponent />
      <Footer />
    </>
  );
}

export default App;
