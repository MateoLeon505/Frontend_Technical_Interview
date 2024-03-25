import React from "react";
import styles from "../styles/welcome.module.css";

const welcome = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>BIENVENIDO A WIN</h1>
        <h3>EL ÚNICO MARKETPLACE DE FÚTBOL</h3>
        <h4>
          INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS
        </h4>
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
