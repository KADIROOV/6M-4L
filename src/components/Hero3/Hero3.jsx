import style from "./Hero3.module.css";
import headphone3 from "../../assets/images/headphone-3.png";

export default function Hero3() {
  return (
    <section className={style.container}>
      <div className={style.image}>
        <img src={headphone3} alt="Headphone png" />
      </div>
      <div className={style.info}>
        <h2 className={style.heroTitle}>
          XX99 <br /> Headphones
        </h2>
        <p className={style.heroParag}>
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button className={style.btn}>See Product</button>
      </div>
    </section>
  );
}
