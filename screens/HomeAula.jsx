import { View } from "react-native";
import { Text, Button } from "react-native-paper";


export default function HomeAula({navigation}) {
  return (
    <View>
      <Text>Bem vindo ao sistema de navegação</Text>
      <Button onPress={() => navigation.navigate("BatteryInfo")}>Porcentagem da bateria</Button>
      <Button onPress={() => navigation.navigate("DeviceAula")}>Informação do dispositivo</Button>
      <Button onPress={() => navigation.navigate("NivelAula")}>Nivel da bateria Cor</Button>
    </View>
  );
}