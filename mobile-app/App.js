import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function App() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const slides = [0, 1, 2, 3];

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height - 200}
        autoPlay={false}
        data={slides}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
      <Button
        title=""
        color="coral"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => Alert.alert(`Touchable Added times.`)}
      />
      <Text>Open up App.js to start working on your app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    color: " #ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
