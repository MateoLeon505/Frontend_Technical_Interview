import React, { useState } from "react";
import {
  Welcome,
  Enter,
  Experiences,
  Discover,
  Stepper,
  SwiperButton,
} from "@/components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/Home.module.css";
import "swiper/css";

const Slider = () => {
  const [activeStep, setActiveStep] = useState(1);
  const changeStep = (swiper) => setActiveStep(swiper.activeIndex);

  return (
    <>
      <Stepper activeStep={activeStep} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // className={styles.swiper}
        onSlideChange={changeStep}
      >
        <SwiperSlide>
          <Welcome />
        </SwiperSlide>
        <SwiperSlide>
          <Enter />
        </SwiperSlide>
        <SwiperSlide>
          <Experiences />
        </SwiperSlide>
        <SwiperSlide>
          <Discover />
        </SwiperSlide>
        <SwiperButton />
      </Swiper>
    </>
  );
};

export default Slider;
