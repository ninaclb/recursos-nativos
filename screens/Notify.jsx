import { Text, View, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";
import * as Device from "expo-device";

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
  botao: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    gap: 10,
    alignContent: "center",
  },
});

export default function Notify({ navigation }) {
  const [expoToken, setExpoToken] = useState("");
  const [nivelBateria, setNivelBateria] = useState();
  const [ultimaNotif, setUltimaNotif] = useState();

  async function notificarExpo() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Este é o titulo da notificação",
        subtitle: "Este é o subtitulo",
        body: "Este é o corpo da notificação",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }
  
  async function notificarBateria() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nivel da Bateria",
        subtitle: "Este é o subtitulo",
        body: "Sua bateria é: " + nivelBateria + "%. Cuidado!",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  useEffect(() => {
    bateria();
  }, [nivelBateria]);

  async function notificarNome() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nome do Aparelho",
        subtitle: "Subtitulo",
        body: `Nome do aparelho: ${Device.deviceName}`,
      },
      trigger: { seconds: 2 },
    });
    setExpoToken(token);
  }

  const ultimaNotificacao = Notifications.useLastNotificationResponse();
  async function exibirAlerta() {
    const idToken = ultimaNotificacao.notification.request.identifier;
    alert('Atenção! ' + idToken)
    console.log(idToken);
  }
  
  useEffect(() => {
    if (ultimaNotificacao){
      setUltimaNotif(ultimaNotificacao.notification.request.identifier);
    };
    exibirAlerta();
  }, [ultimaNotificacao]);

  async function lerNotificacao() {
    const ultimaNotificacao = await Notifications.getLastNotificationResponseAsync();
    alert(ultimaNotificacao.notification.request.identifier);
    console.log(ultimaNotificacao);
  }
  
  async function mudarPagina() {
    const idToken = ultimaNotif;
    alert('Atenção! ' + idToken)
    console.log(idToken);
    if (idToken == expoToken) {
      navigation.navigate("HomeAula");
    }
  }
  
  useEffect(() => {
    mudarPagina();
  }, [ultimaNotificacao]);


  return (
    <View style={styles.container}>
      <Header title={"Notificação"} style={styles.titulo} />
      <View style={styles.botao}>
        <Text>Expo Token: {expoToken}</Text>
        <Button
          title="Enviar Notificação"
          onPress={async () => notificarExpo()}
        />
        <Button
          title="Enviar Notificação Bateria"
          onPress={async () => notificarBateria()}
        />
        <Button
          title="Enviar Notificação do Nome"
          onPress={async () => notificarNome()}
        />
        <Button 
        title="Enviar ultima notificação lida" 
        onPress={async () => lerNotificacao()}/>
        <Button
         title="notificar e ir para outra página"
         onPress={async () => mudarPagina()}/>
        

        {/* <Button title="Ler a ultima notificação clicada" /> */
        /* <Button title="Ler a notificação não clicada" /> */}
      </View>
      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
