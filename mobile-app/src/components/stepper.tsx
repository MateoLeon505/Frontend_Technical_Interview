import { View, StyleSheet } from "react-native";
import React from "react";

const Stepper = ({ activeStep }: { activeStep: number }) => {

  return (
    <View style={styles.stepperContainer}>
      <View
        style={[
          styles.stepperItem,
          activeStep === 0
            ? styles.stepperItemActive
            : styles.stepperItemNotActive,
        ]}
      ></View>
      <View
        style={[
          styles.stepperItem,
          activeStep === 1
            ? styles.stepperItemActive
            : styles.stepperItemNotActive,
        ]}
      ></View>
      <View
        style={[
          styles.stepperItem,
          activeStep === 2
            ? styles.stepperItemActive
            : styles.stepperItemNotActive,
        ]}
      ></View>
      <View
        style={[
          styles.stepperItem,
          activeStep === 3
            ? styles.stepperItemActive
            : styles.stepperItemNotActive,
        ]}
      ></View>
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  stepperContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "1%",
    gap: 10,
  },
  stepperItem: {
    flex: 1,
    height: 10,
    borderRadius: 20,
  },
  stepperItemActive: {
    backgroundColor: "#64c883",
  },
  stepperItemNotActive: {
    backgroundColor: "#aaaaaa",
  },
});
