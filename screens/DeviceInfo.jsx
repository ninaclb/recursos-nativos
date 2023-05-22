//Anotação de outa aula
import { StyleSheet, Text, View } from "react-native";

// import DeviceInfo from "react-native-device-info";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },

  content: {
    flex: 1,
    gap: 20,
    padding: 20,//
    alignSelf: "center",
  },

  contentTextStyle: {
    padding: 5,
    textAlignVertical: "center",
    minHeight: 50,
    backgroundColor: "#969",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  footer: {
    backgroundColor: "#888",
    paddingHorizontal: 25,
    padding: 20,
  },
});

export default function Exemplo() {
  return (
    <View style={styles.container}>
      <Header title={"informações da bateria"} />
      <View style={styles.body}>
        <Text>O seu dispositivo é: {Device.deviceName}</Text>{" "}
      </View>
      <Footer />{" "}
    </View>
  );
}
