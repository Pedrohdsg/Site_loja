import { Link } from "react-router-dom";
import styles from "./Banner.module.css";
import logo from "./icone.gif";

function Banner() {
  return (
    <header className={styles.fundo}>
      <Link to="./">
        <img
          src={logo}
          alt="Logo da Loja"
          width={250}
          className={styles.logo}
        ></img>
      </Link>
      <nav className={styles.nav}>
        <Link to="./carrinho">
          <a className={styles.link}>Carrinho</a>
        </Link>
        <Link to="./contato">
          <a className={styles.link}>Contato</a>
        </Link>
      </nav>
    </header>
  );
}

export default Banner;
