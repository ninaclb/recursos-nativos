import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";
import { Gyroscope, Magnetometer, Accelerometer, Barometer } from "expo-sensors";

import Header from "../components/Header";
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
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default function Sensors({ navigation }) {
  const [giroscopio, setGiroscopio] = useState({});
  const [magneto, setMagneto] = useState({});
  const [orientation, setOrientation] = useState("Horizontal");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [barometerData, setBarometerData] = useState({
    pressure: 0,
    relativeAltitude: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const toggleAccelerometerListener = () => {
    subscription ? unsubscribeAccelerometer() : subscribeAccelerometer();
  };

  const subscribeAccelerometer = () => {
    setSubscription(Accelerometer.addListener(setAccelerometerData));
  };

  const unsubscribeAccelerometer = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const _slowAccelerometer = () => Accelerometer.setUpdateInterval(1000); // atualiza a cada 1 segundo
  const _fastAccelerometer = () => Accelerometer.setUpdateInterval(16); // atualiza a cada 16 milisegundos

  useEffect(() => {
    subscribeAccelerometer();
    return () => unsubscribeAccelerometer();
  }, []);

  useEffect(() => {
    const gyroscopeListener = (data) => {
      setGiroscopio(data);
      determineOrientation(data);
    };

    const magnetometerListener = (data) => {
      setMagneto(data);
    };

    Gyroscope.addListener(gyroscopeListener);
    Magnetometer.addListener(magnetometerListener);

    return () => {
      Gyroscope.removeAllListeners();
      Magnetometer.removeAllListeners();
    };
  }, []); // para atualizar

  const determineOrientation = (gyroData) => {
    const { z } = gyroData;
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

  const toggleBarometerListener = () => {
    if (subscription) {
      unsubscribeBarometer();
    } else {
      subscribeBarometer();
    }
  };

  const subscribeBarometer = () => {
    setSubscription(Barometer.addListener(({ pressure, relativeAltitude }) => {
      setBarometerData({ pressure, relativeAltitude });
    }));
  };

  const unsubscribeBarometer = () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
  };

  useEffect(() => {
    subscribeBarometer();
    return () => unsubscribeBarometer();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={"Sensores"} style={styles.titulo} />
      <View style={styles.sensor}>
        <ScrollView>
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

          <Text style={styles.text}>
            Acelerometro: (o gs quando 1g = 9.81 m/s^2)
          </Text>

          <Text style={styles.text}>
            Acelerometro:
            {"\n"}
            x: {accelerometerData.x}
            {"\n"}
            y: {accelerometerData.y}
            {"\n"}
            z: {accelerometerData.z}
            {"\n"}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={subscription ? unsubscribeAccelerometer : subscribeAccelerometer}
              style={styles.button}
            >
              <Text>{subscription ? "On" : "Off"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_slowAccelerometer} style={[styles.button, styles.middleButton]}>
              <Text>Slow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_fastAccelerometer} style={styles.button}>
              <Text>Fast</Text>
            </TouchableOpacity>
          </View>

          <Text>Barometer: Listener {subscription ? 'ACTIVE' : 'INACTIVE'}</Text>
          <Text>Pressure: {barometerData.pressure} hPa</Text>
          <Text>
            Relative Altitude:{' '}
            {Platform.OS === 'ios' ? `${barometerData.relativeAltitude} m` : 'Only available on iOS'}
          </Text>
          <TouchableOpacity onPress={toggleBarometerListener} style={styles.button}>
            <Text>Toggle listener</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Footer onPress={() => navigation.navigate("Home")} title={"Voltar"} style={styles.botao} />
    </View>
  );
}
