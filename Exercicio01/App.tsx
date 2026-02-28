import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

export default function App() {
const [nome, setNome] = useState('')
const alerta = () => {
 alert("Fala meu mano " + nome);
}
  return (

    <View style={styles.container}>
      <Text>Olá, eu sou Rossandre Alex Cordeiro Nunes Filho</Text>
        <TextInput
        style={styles.palavra}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNome}
      />
      <Button title="enviar" onPress={alerta}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  palavra: {
    color: '#00aaff',
    height: 'auto',
    borderColor: 'red',
    borderWidth: 1,
    width: 200,
    borderRadius: 100,
    margin: 20,
    textAlign: 'center'
  },
});
