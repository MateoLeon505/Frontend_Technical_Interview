import React from "react";
import styles from "../styles/stepper.module.css";

const Stepper = ({ activeStep }) => {

  return (
    <ul className={styles.stepper}>
      <li
        className={`${styles.step} ${activeStep === 0 && styles.stepActive}`}
      ></li>
      <li
        className={`${styles.step} ${activeStep === 1 && styles.stepActive}`}
      ></li>
      <li
        className={`${styles.step} ${activeStep === 2 && styles.stepActive}`}
      ></li>
      <li
        className={`${styles.step} ${activeStep === 3 && styles.stepActive}`}
      ></li>
    </ul>
  );
};

export default Stepper;
