import style from "./Hero4.module.css";
import card1 from "../../assets/images/card-image-1.png";
import card2 from "../../assets/images/card-image-2.png";
import card3 from "../../assets/images/card-image-3.png";

export default function Hero4() {
  return (
    <section className={style.container}>
      <div className={style.cards}>
        <div className={style.card}>
          <img src={card1} alt="Headphone image on Card" />
          <h3 className={style.cardTitle}>Headphones</h3>
          <a href="#">
            Shop
          </a>
        </div>
        <div className={style.card}>
          <img src={card2} alt="Headphone image on Card" />
          <h3 className={style.cardTitle}>Speakers</h3>
          <a href="#">
            Shop
          </a>
        </div>
        <div className={style.card}>
          <img src={card3} alt="Headphone image on Card" />
          <h3 className={style.cardTitle}>Earphones</h3>
          <a href="#">
            Shop 
          </a>
        </div>
      </div>
    </section>
  );
}
