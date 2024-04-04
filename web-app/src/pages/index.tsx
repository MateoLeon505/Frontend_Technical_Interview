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
  const changeStep = (swiper: any) => setActiveStep(swiper.activeIndex);

  return (
    <div className={styles.mainContainer}>
      <Stepper activeStep={activeStep} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={changeStep}
        className={styles.swiperContainer}
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
        <SwiperButton activeStep={activeStep} />
      </Swiper>
    </div>
  );
};

export default Home;
