import { useEffect, useCallback } from "react";
import { router } from "expo-router";
import { Pressable, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const SwipperButton = ({
  activeStep,
  onNextSlide,
}: {
  activeStep: number;
  onNextSlide: () => void;
}) => {
  const [loadedFonts] = useFonts({
    NunitoSansBlack: require("../assets/fonts/Nunito_Sans/NunitoSans_7pt_Condensed-Black.ttf"),
  });
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (loadedFonts) {
      await SplashScreen.hideAsync();
    }
  }, [loadedFonts]);
  if (!loadedFonts) return null;

  const navigateToSearch = () => router.replace("/search");

  return (
    <Pressable
      style={[
        styles.buttonContainer,
        activeStep === 0
          ? styles.filledBackground
          : styles.transparentBackground,
      ]}
      onLayout={onLayout}
      onPress={activeStep === 3 ? navigateToSearch : onNextSlide}
    >
      <Text style={[styles.buttonText, styles.fontBlack]}>
        {activeStep === 3 ? "FINALIZAR" : "SIGUIENTE"}
      </Text>
    </Pressable>
  );
};

export default SwipperButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "94%",
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#64c883",
    position: "absolute",
    bottom: "5%",
  },
  filledBackground: {
    backgroundColor: "#0a0a0a",
  },
  transparentBackground: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#64c883",
  },
  fontBlack: {
    fontFamily: "NunitoSansBlack",
    fontSize: 16,
  },
});
