import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Player from './components/player.js'
import Button from './components/button.js'

const player1img = require('./assets/mattthomas.jpg')
const player2img = require('./assets/yutaw.jpg')
const player3img = require('./assets/rhj.jpg')

export default function App() {
const [playerIndex, setPlayerIndex] = useState(0);

const handlePlayerPress = () => {
    setPlayerIndex
}

const imageList = [player1img, player2img, player3img];

    console.log(player);
  return (
    <View style={styles.container}>
      <Player player={player} imageList={imageList} playerIndex={playerIndex} />
      <Button label={"press"} onPress={handlePlayerPress} />
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
});
