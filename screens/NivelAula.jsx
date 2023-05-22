import * as Battery from 'expo-battery';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native';

export default function BatteryScreen({ navigation }) {
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState('green');

    async function atualizarTudo() {
        bateria();
    async function bateria() {
        const level = await Battery.getBatteryLevelAsync();// Função para obter o nível da bateria
        setBatteryLevel(level * 100);
        if (batteryLevel >= 80) {
          setBackgroundColor('green');
        } else if (batteryLevel >= 50) {
          setBackgroundColor('yellow');
        } else if (batteryLevel >= 30) {
          setBackgroundColor('orange');
        } else {
          setBackgroundColor('red');
        }
    };
}

useEffect(() => {
    atualizarTudo();
  }, [batteryLevel]);


  return (
    <View>
      <Text style={{backgroundColor: backgroundColor}}>{batteryLevel}</Text>
      <Button title="Atualizar" onPress={atualizarTudo} />
    </View>
  );
}