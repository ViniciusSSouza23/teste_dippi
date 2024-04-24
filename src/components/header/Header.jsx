import Navbar from "../navbar/Navbar";
import headerStyles from "./headerStyle.module.css";
function Header() {
  return (
    <header className={headerStyles.headerContainer}>
      <Navbar />
    </header>
  );
}

export default Header;
