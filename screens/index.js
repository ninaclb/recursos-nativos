import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeAula from "./HomeAula";
import BatteryInfo from "./BatteryInfo";
import DeviceAula from "./DeviceAula";
import NivelAula from "./NivelAula";
import MyScreenOrietation from "./MyScreenOrietation";
import Notify from "./Notify";
import ContactsInfo from "./ContactsInfo";
import { setAutoServerRegistrationEnabledAsync } from "expo-notifications";
import Agenda from "./Agenda";
import Novo from "./Novo";
import Sensors from "./Sensors";
import Capture from "./Capture";
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeAula" component={HomeAula} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceAula" component={DeviceAula} />
        <Stack.Screen name="NivelAula" component={NivelAula} />
        <Stack.Screen name="MyScreenOrietation" component={MyScreenOrietation} />
        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="ContactsInfo" component={ContactsInfo} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Novo" component={Novo} />
        <Stack.Screen name="Sensors" component={Sensors} />
        <Stack.Screen name="Capture" component={Capture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}