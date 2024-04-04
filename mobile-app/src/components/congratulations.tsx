import React, { useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  FadeInUp,
  FadeInRight,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GlobalStyles from "../styles";

const Congratulations = () => {
  const [loadedFonts] = useFonts({
    IntegralCFRegular: require("../assets/fonts/Font_integral-cf/IntegralCF-Regular.ttf"),
    NunitoSansBold: require("../assets/fonts/Nunito_Sans/NunitoSans_7pt_Condensed-Bold.ttf"),
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
    <View style={styles.container} onLayout={onLayout}>
      <Animated.Image
        source={require("../assets/images/success.png")}
        entering={FadeInUp.delay(200).duration(1000).springify()}
      />
      <Animated.Text
        style={[GlobalStyles.h1, GlobalStyles.textGreen, styles.fontIntegral]}
        entering={FadeInRight.delay(300).duration(1000).springify()}
      >
        FELICITACIONES
      </Animated.Text>
      <Animated.Text
        style={[GlobalStyles.h3, GlobalStyles.textWhite]}
        entering={FadeInLeft.delay(500).duration(1000).springify()}
      >
        Bienvenido a WIN
      </Animated.Text>
      <Animated.Text
        style={[GlobalStyles.h4, GlobalStyles.textWhite]}
        entering={FadeInDown.delay(400).duration(1000).springify()}
      >
        Ya puedes hacer parte del mundo del deporte
      </Animated.Text>
    </View>
  );
};

export default Congratulations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    marginTop: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  fontIntegral: {
    fontFamily: "IntegralCFRegular",
  },
  fontBold: {
    fontFamily: "NunitoSansBold",
  },
});
