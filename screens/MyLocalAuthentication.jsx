import { Text, View, StyleSheet, Button, TouchableOpacity, Alert, TextInput } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

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
  botao: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default function MyLocalAuthentication({ navigation }) {
  const [authType, setAuthType] = useState("Biometria");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const autenticar = async () => {
    try {
      const disponivel = await LocalAuthentication.hasHardwareAsync();
      if (!disponivel) {
        Alert.alert("Autenticação não está disponível");
        return;
      }

      setIsButtonDisabled(true); // Desabilitar o botão durante a autenticação

      const promptMessage = customMessage || `Escolha o método de autenticação: ${authType}`;
      const { success, error } = await LocalAuthentication.authenticateAsync({
        promptMessage,
      });

      if (success) {
        Alert.alert("Autenticado com sucesso.");
      } else {
        if (error === "user_cancelled") {
          Alert.alert("Cancelado", "Falha na autenticação. Tente novamente.");
        } else {
          Alert.alert("O usuário cancelou a autenticação.");
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente mais tarde.");
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 20000); // definição de tempo do bloqueio do botão
    }
  };

  const toggleAuthType = () => {
    setAuthType(authType === "Biometria" ? "Rosto" : "Biometria");
  };

  return (
    <View style={styles.container}>
      <View>
        <Header title={"Authentication"} style={styles.title} />
        <TextInput
          style={styles.input}
          value={customMessage}
          onChangeText={(text) => setCustomMessage(text)}
          placeholder="Sua mensagem fofoqueira aqui: "
        />
        <TouchableOpacity style={styles.botao} onPress={autenticar} disabled={isButtonDisabled}>
          <Text style={styles.text}>Autenticação por {authType}</Text>
          <Button title="Autenticar" onPress={autenticar} disabled={isButtonDisabled} />
        </TouchableOpacity>
        <Button title={`Alternar para ${authType === "Biometria" ? "Rosto" : "Biometria"}`} onPress={toggleAuthType} disabled={isButtonDisabled} />
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}
