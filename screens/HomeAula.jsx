import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#B0E0E6",
    width: 300,
    height: 50,
    border: 0,
    padding: 0,
    marginBottom: 20,
    boxShadow: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default function HomeAula({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao sistema de navegação</Text>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("BatteryInfo")}
      >
        Porcentagem da bateria
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("DeviceAula")}
      >
        Informação do dispositivo
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("NivelAula")}
      >
        Nivel da bateria Cor
      </Button>
    </View>
  );
}
