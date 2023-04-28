import { Link } from 'react-router-dom';
import styles from './Banner.module.css';
import logo from './icone.gif'

function Banner () {
    return(
        <header className={styles.fundo}>
        <Link to="./">
          <img src={logo} alt="Logo da Loja" width={300}></img>
        </Link>
        <nav>
        
        </nav>
      </header>
    )
}

export default Banner;