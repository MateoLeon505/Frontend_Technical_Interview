import React from "react";
import Image from "next/image";
import Mockup2 from "@/assets/images/Mockup2.svg";
import styles from "../styles/slides.module.css";

const Experiences = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1 className={styles.doubleSpaceHeader}>VIVE TUS PROPIAS EXPERIENCIAS</h1>
        <h4>
          <span className={styles.textGreen}>
            VIVE TU PASIÓN DE FORMA ÚNICA
          </span>{" "}
          COMO NUNCA LO IMAGINASTE
        </h4>
      </div>
      <div className={styles.imageContiner2}>
        <Image src={Mockup2} alt="Welcome To Win" fill/>
      </div>
      <div></div>
    </section>
  );
};

export default Experiences;
