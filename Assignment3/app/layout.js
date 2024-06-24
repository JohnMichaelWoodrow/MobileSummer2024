import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/navbar';
import { PlayerContext } from '../contexts/PlayerContext';
import { Slot } from 'expo-router';
import playerData from '../assets/players.json';

export default function HomeLayout() {
  const [player, setPlayer] = useState(playerData);

  return (
    <View style={styles.container}>
      <NavBar />
      <PlayerContext.Provider value={{ player, setPlayer }}>
        <Slot />
      </PlayerContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 20,
  },
});
