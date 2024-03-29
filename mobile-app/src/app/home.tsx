import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { router } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import { Stepper, SwipperButton } from "../components/index";

const Home = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const slides = [55, 1, 2, 3];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <View style={styles.container}>
      <Stepper activeStep={activeStep} />
      <Carousel
        loop
        width={width}
        height={height - 200}
        autoPlay={false}
        data={slides}
        scrollAnimationDuration={1000}
        onSnapToItem={(index: any) => setActiveStep(index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
      <SwipperButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
