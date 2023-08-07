import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import { Gyroscope, Magnetometer } from "expo-sensors";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF", // Cor de fundo inicial (branco)
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

export default function Sensors({ navigation }) {
  const [giroscopio, setGiroscopio] = useState({});
  const [magneto, setMagneto] = useState({});
  const [orientation, setOrientation] = useState("Horizontal");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  useEffect(() => {
    Gyroscope.addListener(giroscopioListener);
    Magnetometer.addListener(magnetoListener);
    return () => {
      Gyroscope.removeAllListeners();
      Magnetometer.removeAllListeners();
    };
  }, []); // para atualizar

  const giroscopioListener = (data) => {
    setGiroscopio(data);
    determineOrientation(data);
  };
  const magnetoListener = (data) => {
    setMagneto(data);
  };

  const determineOrientation = (gyroData) => {
    const { x, y, z } = gyroData;
    if (z > 1) {
      setOrientation("Vertical");
      setBackgroundColor("#FF0000");
    } else if (z < -1) {
      setOrientation("Inclinado");
      setBackgroundColor("#00FF00");
    } else {
      setOrientation("Horizontal");
      setBackgroundColor("#0000FF");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={"Sensores"} style={styles.titulo} />
      <View style={styles.sensor}>
        <Text style={styles.text}>
          Giroscopio:{"\n"}
          x: {giroscopio.x}
          {"\n"}
          y: {giroscopio.y}
          {"\n"}
          z: {giroscopio.z}
          {"\n"}
        </Text>
        <Text style={styles.text}>
          Magnetometro:{"\n"}
          x: {magneto.x}
          {"\n"}
          y: {magneto.y}
          {"\n"}
          z: {magneto.z}
          {"\n"}
        </Text>

        <Text style={styles.text}>Orientação: {orientation}</Text>
      </View>
      <Footer
        onPress={() => navigation.navigate("Home")}
        title={"Voltar"}
        style={styles.botao}
      />
    </View>
  );
}
