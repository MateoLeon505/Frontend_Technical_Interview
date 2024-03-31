import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Logo from "../../assets/icon.svg";
import { Congratulations } from "../../components/index";
import { openURL } from "expo-linking";

const Search = () => {
  const [loadedFonts] = useFonts({
    IntegralCFRegular: require("../../assets/fonts/Font_integral-cf/IntegralCF-Regular.ttf"),
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

  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
      setShowContent(false);
    };
  }, [pathname]);

  return (
    <View style={styles.container} onLayout={onLayout}>
      {!showContent ? (
        <Congratulations />
      ) : (
        <View style={styles.secondContainer}>
          <Logo />
          <TouchableOpacity
            onPress={() => openURL("https://www.win.investments/")}
            style={styles.buttonSeeMore}
          >
            <Text style={[styles.buttonText, styles.fontBold]}>Ver más</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0a0a0a",
  },
  secondContainer: {
    gap: 50,
    alignItems: "center",
  },
  buttonSeeMore: {
    backgroundColor: "#64c883",
    width: "95%",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
  },
  fontIntegral: {
    fontFamily: "IntegralCFRegular",
  },
  fontBold: {
    fontFamily: "NunitoSansBold",
  },
});
