import { Text, View, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import * as ScreenCapture from "expo-screen-capture";
import Footer from "../components/Footer";
import { useEffect } from "react";
import * as MediaLibrary from "expo-media-library";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default function Capture({ navigation }) {
  const hasPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    return status === "granted"; // granted = concedido
  };

  useEffect(() => {
    if (hasPermissions()) {
      const subscription = ScreenCapture.addScreenshotListener(() => {
        alert("Tira a mão seu anão!!!!😊 A inda por cima é pobre!");
      });
      return () => subscription.remove(); // Remove o listener see não vai fazer um lup infinito
    }
  }, []);

  const active = async () => {
    await ScreenCapture.allowScreenCaptureAsync();
  };
  const deactive = async () => {
    await ScreenCapture.preventScreenCaptureAsync();
  };

  return (
    <View style={styles.container} accessibilityLabel="Expo Screen">
      <View>
        <Header title={"Captura de Tela"} style={styles.titulo} />
        <Button title="Ativar o print" onPress={active} />
        <Button title="Desativar o print" onPress={deactive} />
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}
