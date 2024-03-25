import React from "react";
import styles from "../styles/enter.module.css";

const Enter = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1>INGRESA ALMERCADO DE PASES</h1>
        <h4>
          INVIERTE Y GANA CON LA PRÓXIMA{" "}
          <span className={styles.textYellow}> TRANSFERENCIA DEL JUGADOR</span>
        </h4>
        <h4></h4>
      </div>
      <div>
        <img
          src="https://s3.amazonaws.com/storage.win.investments/tokens/13.webp"
          alt="image"
        />
      </div>
      <div></div>
    </section>
  );
};

export default Enter;
