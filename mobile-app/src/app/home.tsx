import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Button } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import {
  Welcome,
  Enter,
  Experience,
  Discover,
} from "../components/slides/slides";
import { Stepper, SwipperButton } from "../components/index";

const Home = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const slides = [<Welcome />, <Enter />, <Experience />, <Discover />];
  const [activeStep, setActiveStep] = useState(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const onNextSlide = () => ref.current.next();
  return (
    <View style={styles.container}>
      <Stepper activeStep={activeStep} />
      <Carousel
        loop
        width={width}
        height={height - 100}
        autoPlay={false}
        ref={ref}
        data={slides}
        scrollAnimationDuration={1000}
        onSnapToItem={(index: any) => setActiveStep(index)}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
            }}
          >
            {item}
          </View>
        )}
      />
      <SwipperButton activeStep={activeStep} onNextSlide={onNextSlide} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0a0a0a",
    paddingTop: "3%",
  },
});
