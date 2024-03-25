import React from "react";
import styles from "../styles/enter.module.css";

const Enter = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1 className={styles.header}>INGRESA AL MERCADO DE PASES</h1>
        <h5>
          INVIERTE Y GANA CON LA PRÓXIMA{" "}
          <span className={styles.texTransfer}> TRANSFERENCIA DEL JUGADOR</span>
        </h5>
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
