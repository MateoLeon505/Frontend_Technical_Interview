import React from "react";
import Image from "next/image";
import teams from "@/assets/images/teams.svg";
import styles from "@/styles/slides.module.css";

const Discover = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1 className={styles.doubleSpaceHeader}>
          DESCUBRE LOS MEJORES CLUBES
        </h1>
        <h5>
          DONDE JUEGAN{" "}
          <span className={styles.textYellow}>NUESTROS JUGADORES</span>
        </h5>
      </div>
      <div className={styles.figure}>
        <div className={styles.imageContiner2}>
          <Image src={teams} alt="Welcome To Win" fill />
        </div>
        <p className={styles.textImage}>Y MUCHOS MÁS INGRESANDO AL MERCADO</p>
      </div>
    </section>
  );
};

export default Discover;
