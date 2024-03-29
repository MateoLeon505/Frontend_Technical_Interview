import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity>
        <Text>APP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
    justifyContent: "center",
  },
});
