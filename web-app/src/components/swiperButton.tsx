import React from "react";
import { useSwiper } from "swiper/react";
import styles from "../styles/swiperButton.module.css";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => swiper.slideNext()} className={styles.swiperButt}>
        SIGUIENTE
      </button>
    </div>
  );
};

export default SwiperButton;
