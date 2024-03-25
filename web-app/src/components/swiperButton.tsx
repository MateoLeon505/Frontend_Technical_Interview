import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slideNext()}>Sguiente</button>
    </div>
  );
};

export default SwiperButton;
