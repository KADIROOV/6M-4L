import style from "./Footer.module.css";
import logo from "../../assets/images/audiophileLogo.svg";
import facebook from "../../assets/images/facebook-icon.svg"
import insta from "../../assets/images/insta-icon.svg"
import x from "../../assets/images/x-icon.svg"

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerInfo}>
        <div className={style.footerParag}>
          <img src={logo} alt="Footer Logo Image" />
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className={style.footerNav}>
          <ul className={style.footerNavBar}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">HEADPHONES</a>
            </li>
            <li>
              <a href="#">SPEAKERS</a>
            </li>
            <li>
              <a href="#"> EARPHONES</a>
            </li>
          </ul>
          <div className={style.images}>
          <img src={facebook}/>
          <img src={x} />
          <img src={insta} />
          </div>
        </div>
      </div>
      <p>Copyright 2021. All Rights Reserved</p>
    </footer>
  );
}
