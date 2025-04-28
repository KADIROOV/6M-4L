import style from "./Hero1.module.css";
import headphone1 from "../../assets/images/headphone-1.png";

export default function Hero1() {
  return (
    <section className={style.container}>
      <div className={style.image}>
        <img src={headphone1} alt="Headphone png" />
      </div>
      <div className={style.info}>
        <span>NEW PRODUCT</span>
        <h2 className={style.heroTitle}>XX99 Mark II <br /> Headphones</h2>
        <p className={style.heroParag}>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className={style.btn}>
        See Product
        </button>
      </div>
    </section>
  );
}
