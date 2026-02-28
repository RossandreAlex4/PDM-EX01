import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';


const img1 = require('./assets/Walter_White.png');
const img2 = require('./assets/Jesse_Pinkman.png');
const img3 = require('./assets/saul goodman.png');
const img4 = require('./assets/Gustavo_Fring.png');
const img5 = require('./assets/Hank_Schrader.png');
const img6 = require('./assets/Mike_Ehrmantraut.png');


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.palavra}>Esses são alguns dos personagens da melhor série da história da humanidade</Text>
      <ScrollView contentContainerStyle={styles.cimagens}>
        <View>
           <Image source={img1} style={styles.img}/>
           <Image source={img2} style={styles.img}/>
           <Image source={img3} style={styles.img}/>
           <Image source={img4} style={styles.img}/>
           <Image source={img5} style={styles.img}/>
           <Image source={img6} style={styles.img}/>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b4708',
  },
  img: {
    width:300
  },
  palavra: {
    margin: 20,
    marginTop: 50,
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  cimagens:{
    alignItems: 'center'
  }
});
