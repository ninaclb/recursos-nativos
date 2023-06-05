import { Button, ScrollView, StyleSheet, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Footer from "../components/Footer";
import Header from "../components/Header";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
      },
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
  botao: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    gap: 10,
    alignContent: "center",
},
});

async function padrao() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_DOWN
  );
}
async function direita() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  }
  async function esquerda() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }
  async function normal() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  }
  async function inverter() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UPSIDE_DOWN
    );
  }
  async function normal2() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }
  async function informar() {//nao sei fazer funcionar
    await ScreenOrientation.getOrientationAsync();
  }
  console.log(ScreenOrientation.getOrientationAsync());

export default function MyScreenOrientation() {
  return (
    <View style={styles.container}>
      <Header style={styles.titulo} title={"Orientação da tela"} />
      <ScrollView>
      <View style={styles.botao}>
        <Button title="Default" onPress={padrao} />
        <Button title="direita" onPress={direita} />
        <Button title="esquerda" onPress={esquerda} />
        <Button title="normal" onPress={normal} />
        <Button title="inverter" onPress={inverter} />
        <Button title="normal_2" onPress={normal2} />
        <Button title="informar" onPress={informar} />
      </View>
      </ScrollView>
      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
