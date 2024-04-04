import { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import MockUp from "../../assets/images/mockupWelcome.svg";
import GlobalStyles from "../../styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Welcome = () => {
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
    <View style={styles.welcomeContainer} onLayout={onLayout}>
      <Image
        source={require("../../assets/images/backgrounds/backgroundSlide1.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={[GlobalStyles.h1, styles.fontIntegral]}>
          BIENVENIDO A WIN
        </Text>
        <Text
          style={[
            GlobalStyles.textGreen,
            GlobalStyles.h3,
            styles.fontExtraBold,
          ]}
        >
          EL ÚNICO MARKETPLACE DE FUTBOL
        </Text>
        <Text style={[GlobalStyles.paragraph, styles.fontBold]}>
          INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS
        </Text>
      </View>
      <View>
        <MockUp />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
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
