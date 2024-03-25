"use client";
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

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const changeStep = (swiper) => setActiveStep(swiper.activeIndex);

  return (
    <div
      className={`${styles.mainContainer} 
      ${activeStep === 0 && styles.background1} 
      ${activeStep === 1 && styles.background2}`}
    >
      <Stepper activeStep={activeStep} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={changeStep}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.slide}>
          <Welcome />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Enter />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Experiences />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Discover />
        </SwiperSlide>
        <SwiperButton />
      </Swiper>
    </div>
  );
};

export default Home;
