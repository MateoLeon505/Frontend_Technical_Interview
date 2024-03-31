import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Index from "./app/index";

const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <Index />
    </View>
  );
};

export default App;
