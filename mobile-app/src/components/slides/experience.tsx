import { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import MockUp from "../../assets/images/mockupWelcome.svg";
import GlobalStyles from "../../styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Experience = () => {
  const [loadedFonts] = useFonts({
    IntegralCFRegular: require("../../assets/fonts/Font_integral-cf/IntegralCF-Regular.ttf"),
    NunitoSansExtraBold: require("../../assets/fonts/Nunito_Sans/NunitoSans_7pt_Condensed-ExtraBold.ttf"),
    NunitoSansBold: require("../../assets/fonts/Nunito_Sans/NunitoSans_7pt_Condensed-Bold.ttf"),
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

  return (
    <View style={styles.ExperienceContainer} onLayout={onLayout}>
      <View style={styles.textContainer}>
        <Text style={[GlobalStyles.h1, styles.fontIntegral]}>
          VIVE TUS PROPIAS EXPERIENCIAS
        </Text>
        <Text
          style={[GlobalStyles.textWhite, GlobalStyles.h3, styles.fontBold]}
        >
          <Text style={[GlobalStyles.textGreen, styles.fontExtraBold]}>
            VIVE TU PASIÓN DE FORMA ÚNICA
          </Text>{" "}
          COMO NUNCA LO IMAGINASTE
        </Text>
      </View>
      <View>
        <MockUp />
      </View>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({
  ExperienceContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 5,
  },
  textContainer: {
    display: "flex",
    gap: 5,
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    height: "68%",
    width: "100%",
    left: 1,
    right: 0,
    bottom: "8%",
  },
  fontIntegral: {
    fontFamily: "IntegralCFRegular",
  },
  fontExtraBold: {
    fontFamily: "NunitoSansExtraBold",
  },
  fontBold: {
    fontFamily: "NunitoSansBold",
  },
});
