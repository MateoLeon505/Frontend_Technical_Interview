import React from "react";
import Image from "next/image";
import DiegoValdes from "@/assets/images/Diego Valdes.svg";
import styles from "../styles/slides.module.css";

const Enter = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1 className={styles.doubleSpaceHeader}>INGRESA AL MERCADO DE PASES</h1>
        <h5>
          INVIERTE Y GANA CON LA PRÓXIMA{" "}
          <span className={styles.textYellow}> TRANSFERENCIA DEL JUGADOR</span>
        </h5>
      </div>
      <div className={styles.imageContiner}>
        <Image src={DiegoValdes} alt="Welcome To Win" fill />
      </div>
      <div></div>
    </section>
  );
};

export default Enter;
