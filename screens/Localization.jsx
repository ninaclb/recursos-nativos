import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import * as ScreenCapture from "expo-screen-capture";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationText: {
    fontSize: 18,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

export default function Localization({ navigation }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permissão negada");
        return;
      }

      let info = await Location.getCurrentPositionAsync({});
      setLocation(info.coords);
    })();
  }, []);

  const hasPermissions = async () => {
    const { status } = await ScreenCapture.getPermissionsAsync();
    return status === "granted";
  };

  useEffect(() => {
    const blockScreenCapture = async () => {
      if (await hasPermissions()) {
        await ScreenCapture.preventScreenCaptureAsync();
      }
    };

    blockScreenCapture();

    return () => {
      ScreenCapture.allowScreenCaptureAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização</Text>
      <View style={styles.mapContainer}>
        {location && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={"Sua localização"}
            />
          </MapView>
        )}
      </View>
      <View>
        {!location ? (
          <Text style={styles.locationText}>Carregando...</Text>
        ) : (
          <Text style={styles.locationText}>
            <Text style={styles.boldText}>Latitude:</Text>{" "}
            {location.latitude}, <Text style={styles.boldText}>Longitude:</Text>{" "}
            {location.longitude}
          </Text>
        )}
      </View>
    </View>
  );
}
