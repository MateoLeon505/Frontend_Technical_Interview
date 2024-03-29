import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";

const SwipperButton = () => {
  return (
    <Pressable style={styles.buttonContainer}>
      <Text style={styles.buttonText}>SIGUIENTE</Text>
    </Pressable>
  );
};

export default SwipperButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "94%",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#64c883",
  },
  buttonText: {
    color: "#64c883",
  },
});
