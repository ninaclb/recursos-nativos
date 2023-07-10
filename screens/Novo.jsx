import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const styles = StyleSheet.create({
    container: {   
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
text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#B0E0E6",
    padding: 10,
    color: "#6750A4",
    alignContent: "center",
},
});

 
export default function Novo({ navigation}) {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [expoToken, setExpoToken] = useState("");


  async function vermelho() {
      setBackgroundColor("red")
  }

  async function verde() {
        setBackgroundColor("green")
    }

    async function amarelo() {
        setBackgroundColor("yellow")
    }

    async function rosa() {
        setBackgroundColor("#FF69B4")
    }

    async function azul() {
        setBackgroundColor("#B0E0E6")
    }

    async function laranja() {
        setBackgroundColor("#FF8C00")
    }

    async function roxo() {
        setBackgroundColor("#BA55D3")
    }


    async function notificar() {
      const token = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Parabens!!!!",
          subtitle: "Você escolheu uma otima cor, seja muito feliz com ela",
        },
        trigger: { seconds: 2 },
      });
      setExpoToken(token);
    }
    


  return (
    <View style={{
        flex: 1,
        gap: 10,
        backgroundColor: backgroundColor,
    }}>
      <Header style={styles.titulo} title={"Orientação da tela"} />
      <View style={styles.botao}>
        <Text
            style={styles.text}
        >Escolha sua cor favorita para deixar de tela de fundo!!!! (❁´◡`❁)</Text>
        
        <Button title="green" onPress={verde}/>
        <Button title="yellow" onPress={amarelo} />
        <Button title="red" onPress={vermelho} />
        <Button title="pink" onPress={rosa} />
        <Button title="blue" onPress={azul} />
        <Button title="orange" onPress={laranja} />
        <Button title="purple" onPress={roxo} />
        
        <Button
        style={styles.botao}
        title="Notificar"
        placeholder="Notificar"
        onPress={notificar}
      >
        Notificar
      </Button>
      </View>

      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
