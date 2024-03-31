import { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import MockUp from "../../assets/images/mockupWelcome.svg";
import Teams from "../../assets/images/teams.svg";
import GlobalStyles from "../../styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Discover = () => {
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
    <View style={styles.discoverContainer} onLayout={onLayout}>
      <View style={styles.textContainer}>
        <Text style={[GlobalStyles.h1, styles.fontIntegral]}>
          DESCUBRE LOS MEJORES CLUBES
        </Text>
        <Text
          style={[GlobalStyles.textWhite, GlobalStyles.h4, styles.fontBold]}
        >
          DONDE JUEGAN{" "}
          <Text style={[GlobalStyles.textYellow]}>NUESTROS JUGADORES</Text>
        </Text>
      </View>
      <View style={styles.teamsContainer}>
        <Image
          source={require("../../assets/images/teams.png")}
          style={styles.teams}
        />
        <Text style={GlobalStyles.textWhite}>Y MUCHOS MÁS INGRESANDO AL MERCADO</Text>
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  discoverContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: "30%",
  },
  teamsContainer: {
    display: "flex",
    alignItems: "center",
    maxHeight: "70%",
    gap: 15
  },
  teams: {
    height: "100%"
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
