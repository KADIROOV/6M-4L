import style from "./Hero2.module.css";
import headphone2 from "../../assets/images/headphone-2.png";

export default function Hero2() {
  return (
    <section className={style.container}>
      <div className={style.info}>
        <h2 className={style.heroTitle}>
          XX99 Mark I <br /> Headphones
        </h2>
        <p className={style.heroParag}>
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button className={style.btn}>See Product</button>
      </div>
      <div className={style.image}>
        <img src={headphone2} alt="Headphone png" />
      </div>
    </section>
  );
}
