import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';
import {useState} from 'react';

export default function App() {
  
  const [itens,setItens] = useState<string[]>([]);

  const[texto, setTexto] = useState('');

  function adicionarItem(){
    if (texto.trim() === '') return;

    setItens([...itens, texto]);
    setTexto('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Faça sua lista</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={texto}
        onChangeText={setTexto}
      />
      <Button
        color={'red'}
        title='Adicionar'
        onPress={adicionarItem}
      />
      <ScrollView
      style={styles.lista}>
       {itens.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
       ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 12
  },
  lista: {
    marginTop: 20,
    marginHorizontal: 20
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  }
});
