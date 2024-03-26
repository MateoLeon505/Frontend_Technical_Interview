import React from "react";
import { useRouter } from "next/navigation";
import { useSwiper } from "swiper/react";
import styles from "@/styles/swiperButton.module.css";

const SwiperButton = ({ activeStep }: { activeStep: number }) => {
  const swiper = useSwiper();
  const router = useRouter();

  const actionHandler = () => {
    activeStep !== 3 ? swiper.slideNext() : router.push("/search");
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={actionHandler} className={styles.swiperButt}>
        {activeStep !== 3 ? "SIGUIENTE" : "FINALIZAR"}
      </button>
    </div>
  );
};

export default SwiperButton;
