import React from "react";
import styles from "../styles/welcome.module.css";

const welcome = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1 className={styles.header}>BIENVENIDO A WIN</h1>
        <h4 className={styles.textGreen}>
          <span>EL ÚNICO MARKETPLACE DE FÚTBOL</span>
        </h4>
        <p>INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS</p>
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
