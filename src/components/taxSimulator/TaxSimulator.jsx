import taxStyles from "./taxSimulator.module.css";
import svgSimulator from "../../assets/imgs/simulator/svg-simulator.svg";
import CardTaxSimulator from "./card/CardTaxSimulator";
function TaxSimulator() {
  return (
    <section className={taxStyles.taxContainer} id="tarifas">
      <img
        src={svgSimulator}
        alt="SVG seta"
        className={taxStyles.svgPosition}
      />
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-5">
            <h1 className="display-4 mb-4">Simulador de vendas mpays</h1>
            <h6 className="text-18px">
              Veja quanto você recebe nas vendas
              <br className="d-none d-lg-block" /> no crédito, débito e
              parcelado.
            </h6>
          </div>
          <div className="col-lg-7">
            <CardTaxSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaxSimulator;
