import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import * as Notifications from "expo-notifications";

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
    backgroundColor: "#B0E0E6",
    color: "black",
  },
  TextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default function Agenda({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [expoToken, setExpoToken] = useState("");

  async function notificar() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Titulo:" + titulo,
        subtitle: "Subtitulo:" + descricao,
      },
      trigger: { seconds: 2 },
    });
    setExpoToken(token);
  }

  return (
    <View style={styles.container}>
      <Header title={"Agenda de Notificações"} style={styles.titulo} />
      <TextInput
        placeholder="Titulo"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <Button
        style={styles.botao}
        title="Notificar"
        placeholder="Notificar"
        onPress={notificar}
      >
        Notificar
      </Button>
    </View>
  );
}
