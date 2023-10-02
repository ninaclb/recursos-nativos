import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Camera } from "expo-camera";

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

export default function CameraInfo({ navigation }) {
  const[hasPermission, setHasPermission] = useState(null)
  const[cameraRef, setCameraRef] = useState(null)
  const[type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);


  if(hasPermission === null){
    return <View />;
  }
  if(hasPermission === false){
    return <Text>Acesso negado camarada!</Text>;
  }

  return (
    <View style={styles.container}>
      <Header title={"Camera"} style={styles.titulo} />
      <View style={styles.sensor}>
        <ScrollView>
          <View>
            <Camera
            style={{width: 300, height: 300, flex: 1}}
            ref={(ref) => setCameraRef(ref)}
            type={type}
            ratio={"4:3"}
            zoom={2}
             />

          </View>

        
        </ScrollView>
      </View>
      <Footer onPress={() => navigation.goBack()} />
    </View>
  );
}
