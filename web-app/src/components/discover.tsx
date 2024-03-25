import React from "react";
import styles from "../styles/discover.module.css";

const Discover = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1 className={styles.header}>DESCUBRE LOS MEJORES CLUBES</h1>
        <h5>
          DONDE JUEGAN <span className={styles.textYellow}>NUESTROS JUGADORES</span>
        </h5>
      </div>
      <div>
        <img
          src="https://cryptoconexion.com/wp-content/uploads/2023/04/win-02.jpg"
          alt="image"
        />
      </div>
      <div></div>
    </section>
  );
};

export default Discover;
