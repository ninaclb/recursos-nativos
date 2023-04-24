import { Text, View, StyleSheet } from "react-native";
import * as Device from "expo-device";

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    backgroundColor: "#606",
    padding: 10,
    margin: 10,
    color: "white",
    alignContent: "center",
    textAlign: "center",
    marginTop: 200,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    backgroundColor: "#969",
    padding: 10,
    margin: 10,
    color: "white",
    alignContent: "center",
    textAlign: "center",
  },
});

export default function Deviceinfo() {
  return (
    <View>
      <Text style={styles.titulo}>informações do aparelho</Text>
      <Text style={styles.text}>
        O seu dispositivo é:
        {Device.deviceName}
      </Text>
      <Text style={styles.text}>
        Marca do aparelho é:
        {Device.brand}
      </Text>
      <Text style={styles.text}>
        O modelo do aparelho é:
        {Device.modelName}
      </Text>
      <Text style={styles.text}>
        O nome completo do aparelho é:
        {Device.modelName}
      </Text>
      <Text style={styles.text}>
        O design do aparelho é:
        {Device.designName}
      </Text>
      <Text style={styles.text}>
        Ano do lançamento é:
        {Device.deviceYearClass}
      </Text>
      <Text style={styles.text}>
        A memoria do aparelho é:
        {Device.totalMemory}
      </Text>
      <Text style={styles.text}>
        A versão do sistema é a:
        {Device.osVersion}
      </Text>
      <Text style={styles.text}>
        A arquitetura do aparelho é:
        {Device.osBuildId}
      </Text>
    </View>
  );
}
