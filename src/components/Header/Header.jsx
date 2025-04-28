import styles from "./Header.module.css";
import logo from '../../assets/images/audiophileLogo.svg'
import shopping from '../../assets/images/shopping-icon.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <a href="#"><img src={logo} alt="Logo Image" /></a>
          <ul className={styles["nav-bar"]}>
            <li><a href="#">HOME</a></li>
            <li><a href="#">HEADPHONES</a></li>
            <li><a href="#">SPEAKERS</a></li>
            <li><a href="#">EARPHONES</a></li>
          </ul>
          <a href="#"><img src={shopping} alt="Basket icon" /></a>
        </div>
        <h2 className={styles.title}>
            HEADPHONES
        </h2>
      </div>
    </header>
  );
}
