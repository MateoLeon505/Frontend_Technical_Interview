import { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GlobalStyles from "../../styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Enter = () => {
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
    <View style={styles.enterContainer}>
      <Image
        source={require("../../assets/images/backgrounds/backgroundSlide2.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={[GlobalStyles.h1, styles.fontIntegral]}>
          INGRESA AL MERCADO DE PASES
        </Text>
        <Text
          style={[
            GlobalStyles.h4,
            GlobalStyles.textWhite,
            styles.fontExtraBold,
          ]}
        >
          INVIERTE Y GANA CON LA PRÓXIMA{" "}
          <Text style={[GlobalStyles.textYellow, styles.fontExtraBold]}>TRANSFERENCIA DEL JUGADOR</Text>
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <Image
          source={require("../../assets/images/card.png")}
          style={styles.card}
        />
      </View>
    </View>
  );
};

export default Enter;

const styles = StyleSheet.create({
  enterContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
    paddingBottom: 30,
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    maxHeight: "60%",
  },
  card: {
    height: 350,
  },
  textContainer: {
    display: "flex",
    gap: 5,
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    right: 0,
    bottom: "-21%",
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
