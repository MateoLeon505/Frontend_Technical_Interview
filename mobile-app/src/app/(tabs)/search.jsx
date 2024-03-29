import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

const Search = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/home")}>
        <Text>Back to Home</Text>
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
