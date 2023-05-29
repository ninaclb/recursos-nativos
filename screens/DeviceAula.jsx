import { Text, View, StyleSheet } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#B0E0E6",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    color: "white",
    alignContent: "center",
    marginTop: 200,
    
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#B0E0E6",
    padding: 10,
    margin: 10,
    color: "#6750A4",
  },
});

export default function Deviceinfo({navigation}) {
  return (
    <View>
      <ScrollView>
      <Header title={"informações do aparelho"} style={styles.titulo}/>
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
      </ScrollView>
    </View>
  );
}





