import React from "react";
import Image from "next/image";
import styles from "@/styles/slides.module.css";
import MockupWelcome from "@/assets/images/MockupWelcome.svg";

const welcome = () => {
  return (
    <section className={`${styles.sectionContainer} ${styles.background1}`}>
      <div>
        <h1 className={styles.spaceHeader}>BIENVENIDO A WIN</h1>
        <h4 className={`${styles.textGreen} ${styles.spaceHeader}`}>
          <span>EL ÚNICO MARKETPLACE DE FÚTBOL</span>
        </h4>
        <p>INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS</p>
      </div>
      <div className={styles.imageContiner}>
        <Image src={MockupWelcome} alt="Welcome To Win" fill/>
      </div>
    </section>
  );
};

export default welcome;
