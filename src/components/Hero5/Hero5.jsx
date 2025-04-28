import style from "./Hero5.module.css";
import bitmap from "../../assets/images/Bitmap.png"

export default function Hero5() {
  return (
    <section className={style.container}>
      <div className={style.secInfo}>
        <h1>
          Bringing you the <br /> <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={bitmap} alt="Person" />
    </section>
  );
}
