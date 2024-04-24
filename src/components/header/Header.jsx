import Navbar from "../navbar/Navbar";
import headerStyles from "./headerStyle.module.css";
import headerLaptop from "../../assets/imgs/header-laptop.png";
function Header() {
  return (
    <header className={headerStyles.headerContainer}>
      <Navbar />
      <div className="container pb-5">
        <div className="row pt-4">
          <div className="col-lg-5 text-white">
            <h1 className="display-4 mb-4">
              Tecnologia e segurança pra você{" "}
              <span className="fw-bold">vender mais.</span>
            </h1>
            <h6 className="text-18px">
              Venda online com a segurança e tecnologia
              <br className="d-none d-lg-block" /> mpays. Soluções simples e
              flexíveis para
              <br className="d-none d-lg-block" /> digitalizar o seu negócio.
            </h6>
          </div>
          <div className="col-lg-7 position-relative">
            <img
              src={headerLaptop}
              alt="Laptop header"
              className={`img-fluid ${headerStyles.laptopPosition}`}
              width={600}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
