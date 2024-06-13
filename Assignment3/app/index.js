import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext, useState } from 'react';
import Player from './components/player.js';
import Button from './components/button.js';
import { MovieContext } from '../components/MovieContext';

const player1img = require('./assets/mattthomas.jpg');
const player2img = require('./assets/yutaw.jpg');
const player3img = require('./assets/rhj.jpg');
/////////////////////////////////////////////////////////////
export default function App() {
  const [playerIndex, setPlayerIndex] = useState(0);

  const handlePlayerPress = (index) => {
    setPlayerIndex(index);
  };

  const imageList = [player1img, player2img, player3img];

  return (
    <View style={styles.container}>
        <Player players={players[playerIndex]} imageList={imageList} playerIndex={playerIndex}/>
        <View style={styles.buttonContainer}>
            {players.map((_, index) => (
            <Button
                key={index}
                label={index + 1}
                onPress={() => handlePlayerPress(index)}
                isSelected={index === playerIndex}
            />
        ))}
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});