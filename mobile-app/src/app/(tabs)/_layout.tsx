import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs >
      <Tabs.Screen name="home" options={{headerShown: false}}/>
      <Tabs.Screen name="search"/>
    </Tabs>
  );
};

export default TabsLayout;
