import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
});

export default function Header({ title }) {
  const [nivelBateria, setNivelBateria] = useState();
  const [nivelCor, setNivelCor] = useState("green");

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();

    setNivelBateria(nivel * 100);
    if (nivelBateria >= 80) {
        setNivelCor("green");
    } else {
      if (nivelBateria >= 50) {
        setNivelCor("pink");
      } else {
        if (nivelBateria >= 30) {
          setNivelCor("orange");
        } else {
          if (nivelBateria >= 1) {
            setNivelCor("blue");
          }
        }
      }
    }
  }
  useEffect(() => {
    bateria();
  }, [nivelBateria]);

  return (
    <View
      style={{paddingTop: 60, backgroundColor: nivelCor, paddingBottom: 5, paddingHorizontal: 5,
      }}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}
