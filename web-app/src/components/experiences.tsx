import React from "react";
import styles from "../styles/experience.module.css";

const Experiences = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1>VIVE TUS PROPIAS EXPERIENCIAS</h1>
        <h4>
          <span className={styles.textGreen}>
            VIVE TU PASIÓN DE FORMA ÚNICA
          </span>{" "}
          COMO NUNCA LO IMAGINASTE
        </h4>
      </div>
      <div>
        <img
          src="https://www.win.investments/home/phoneMockup.webp"
          alt="image"
        />
      </div>
      <div></div>
    </section>
  );
};

export default Experiences;
