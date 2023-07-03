import * as Battery from 'expo-battery';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  bateria: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
    
    
  },
});

export default function BatteryScreen({ navigation }) {
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState('green');

  async function atualizarTudo() {
    bateria();
  }

  async function bateria() {
    const level = await Battery.getBatteryLevelAsync();
    setBatteryLevel(level * 100);
    if (level >= 0.8) {
      setBackgroundColor('green');
    } else if (level >= 0.5) {
      setBackgroundColor('yellow');
    } else if (level >= 0.3) {
      setBackgroundColor('orange');
    } else {
      setBackgroundColor('red');
    }
  }

  useEffect(() => {
    atualizarTudo();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
    <View style={styles.container}>
      <Header title={"Nível da bateria"} style={styles.titulo}/>
      <View style={styles.bateria}>
        <Text>{batteryLevel}</Text>
        <Button title="Atualizar" onPress={atualizarTudo} />
      </View>
      </View>
      <Footer />
    </View>
  );
}
