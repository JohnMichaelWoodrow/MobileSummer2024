import React, { useState, useContext } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import Button from '../components/button';
import { PlayerContext } from '../contexts/PlayerContext';

export default function Edit() {
  const { player, setPlayer } = useContext(PlayerContext);
  const [playerName, setPlayerName] = useState(player.name);
  const [playerPosition, setPlayerPosition] = useState(player.position);
  const [playerYear, setPlayerYear] = useState(player.year);
  const [displayPosterIndex, setDisplayPosterValue] = useState(player.imageIndex.toString());

  const updatePlayerInfo = () => {
    const latestData = {
      name: playerName,
      year: playerYear,
      position: playerPosition,
      imageIndex: displayPosterIndex,
    };
    setPlayer(latestData);
  };

  const updatePosition = (text) => {
    const tokens = text.split(',');
    setPlayerPosition(tokens);
  };

  const updateDisplayPosterIndex = (text) => {
    setDisplayPosterValue(text);
    if (!isNaN(text) && text !== "") {
      setDisplayPosterValue(parseInt(text));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Player Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPlayerName}
        value={playerName}
      />
      <Text>Player Year</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPlayerYear}
        value={playerYear}
      />
      <Text>Player Position</Text>
      <TextInput
        style={styles.input}
        onChangeText={updatePosition}
        value={playerPosition}
      />
      <Text>Display Poster Index</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateDisplayPosterIndex}
        value={displayPosterIndex}
      />
      <Button label={"Update"} onPress={updatePlayerInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});
