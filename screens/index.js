import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeAula from "./HomeAula";
import BatteryInfo from "./BatteryInfo";
import DeviceAula from "./DeviceAula";
import NivelAula from "./NivelAula";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeAula" component={HomeAula} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceAula" component={DeviceAula} />
        <Stack.Screen name="NivelAula" component={NivelAula} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}