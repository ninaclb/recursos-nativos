import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import * as Battery from 'expo-battery';


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
      <ScrollView>
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
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("MyScreenOrietation")}
      >
        Orientação de tela
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("Notify")}
      >
        Notificações
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("ContactsInfo")}
      >
        ContactsInfo
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("Agenda")}
      >
        Agendar
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("Novo")}
      >
        Novo
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("Sensors")}
      >
        Sensor
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("Capture")}
      >
        Capture
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("MyLocalAuthentication")}
      >
        Authentication
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("CameraInfo")}
      >
        Camera
      </Button>
      <Button
        style={styles.botao}
        onPress={() => navigation.navigate("Localization")}
      >
        Localization
      </Button>
      </ScrollView>
    </View>
  );
}
