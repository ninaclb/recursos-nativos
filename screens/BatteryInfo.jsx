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
  bateria: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default function BatteryInfo({ navigation }) {
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
  }, [nivelBateria]);

  return (
    <View style={styles.container}>
      
        <Header title={"Bateria"} />
        <View style={styles.bateria}>
        <Text>{nivelBateria} %</Text>
        <Button title="Atualizar" onPress={atualizarTudo} />
      </View>
      <Footer />
    </View>
  );
}
