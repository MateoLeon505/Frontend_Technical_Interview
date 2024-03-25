import React from "react";
import styles from "../styles/welcome.module.css";

const welcome = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1>BIENVENIDO A WIN</h1>
        <h4 className={styles.textGreen}>EL ÚNICO MARKETPLACE DE FÚTBOL</h4>
        <h5 className={styles.littleText}>
          INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS
        </h5>
      </div>
      <div>
        <img
          src="https://www.win.investments/home/phoneMockup.webp"
          alt="image"
          className={styles.image}
        />
      </div>
      <div></div>
    </section>
  );
};

export default welcome;
