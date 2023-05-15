import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function BatteryInfo() {
  const [nivelBateria, setNivelBateria] = useState(0);

  async function atualizarTudo() {
    bateria();
    }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  useEffect(() => {
    bateria();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={"Bateria"} />
      <Text>{nivelBateria} %</Text>
      <Button title="Atualizar" onPress={atualizarTudo} />
      <Footer />
    </View>
  );
}
