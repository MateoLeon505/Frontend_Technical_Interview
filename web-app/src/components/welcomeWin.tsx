import React from "react";
import Image from "next/image";
import styles from "../styles/welcome.module.css";
import MockupWelcome from "@/assets/images/MockupWelcome.svg";

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
        <Image src={MockupWelcome} alt="Welcome To Win" />
      </div>
      <div></div>
    </section>
  );
};

export default welcome;
