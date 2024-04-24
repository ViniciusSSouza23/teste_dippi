import logo from "../../assets/imgs/logo.png";
import navbarStyles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className="container d-flex align-items-center py-4">
      <div className="flex-fill">
        <img src={logo} alt="Logo mpays" className="img-fluid" width={151.55} />
      </div>
      <div className="d-flex align-items-center">
        <a href="#soluções" className="links-navbar hover-class">
          Soluções
        </a>
        <a href="#tarifas" className="links-navbar mx-5 hover-class">
          Tarifas
        </a>
        <a href="#depoimentos" className="links-navbar hover-class">
          Depoimentos
        </a>
        <a href="#cadastro" className="links-navbar mx-5 hover-class">
          Cadastro
        </a>
        <a href="#contato" className="links-navbar hover-class">
          Contato
        </a>
        <a
          href=""
          className={`links-navbar ms-5 hover-class ${navbarStyles.btnSignIn}`}
        >
          Entrar
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
