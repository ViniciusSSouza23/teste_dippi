import footerStyle from "./Footer.module.css";
import Instagram from "../../assets/imgs/instagram.png";
import Facebook from "../../assets/imgs/facebook.png";
import Linkedin from "../../assets/imgs/linkedin.png";
import CreditCard from "../../assets/imgs/credit_card.png";
import Certificate from "../../assets/imgs/certificate.png";
import LogoColor from "../../assets/imgs/logo_color.png";

function Footer() {
  return (
    <footer id="contato" className={footerStyle.footerContainer}>
      <div className="container color-base pt-5">
        <div className="row pt-5 mt-5">
          <div className="col-lg-9">
            <div className="row ">
              <div className="col-lg-3">
                <h5 className="text-18px">Endereço</h5>
                <p className="text-12px">
                  R. dos Andradas, 1234
                  <br className="d-none d-lg-block" /> Centro Histórico{" "}
                  <br className="d-none d-lg-block" /> Porto Alegre - RS{" "}
                  <br className="d-none d-lg-block" />
                  90020-008
                </p>
              </div>
              <div className="col-lg-3">
                <h5 className="text-18px">Legal</h5>
                <p className="text-12px">Termos de uso</p>
                <p className="text-12px">Política de privacidade</p>
              </div>
              <div className="col-lg-3">
                <h5 className="text-18px">Contato</h5>
                <p className="text-12px">contato@mpays.com</p>
                <p className="text-12px">(51) 98314.3325</p>
                <div className="d-flex align-items-center">
                  <img src={Linkedin} alt="Linkedin" />
                  <img src={Facebook} alt="Facebook" className="mx-4" />
                  <img src={Instagram} alt="Instagram" />
                </div>
              </div>
              <div className="col-lg-3">
                <h5 className="text-18px">Aceitamos</h5>
                <img
                  className={footerStyle.mtN5}
                  src={CreditCard}
                  alt="Bandeiras"
                />
                <p className={footerStyle.spanText}>
                  *Demais cartões sob contratação.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-end">
            <img src={Certificate} alt="Certificados" className="img-fluid" />
          </div>
        </div>
        <div className="d-flex align-items-center my-5 pt-5">
          <p className={`${footerStyle.copyText} flex-fill`}>
            Copyright @ 2022 mpays
          </p>
          <div>
            <img className="img-fluid" src={LogoColor} alt="Logo" />
          </div>
        </div>
        <p className="text-center text-12px">
          mpays é um produto da Multti Tecnologia e Integrações, empresa
          brasileira registrada no CNPJ nº 33.511.889/0001-20. A atividade de
          subcredenciamento é dispensada de autorização do Banco Central do
          Brasil, conforme termos da Circular nº 3.885/2018. Demais dispositivos
          aplicáveis, como o disposto nas Circulares nº 3.682/2013, 3.886/2018,
          3.952/2019 e Resolução nº 24/2020 são rigorosamente cumpridos.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
