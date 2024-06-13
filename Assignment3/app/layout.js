import { Slot } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/navbar';
import { useState } from 'react';
import playerData from '../assets/players.json';
import { MovieContext } from '../components/PlayerContext'

export default function HomeLayout() {
  const [player, setPlayer] = useState(playerData);

  return (
    <View style={styles.container}>
        <NavBar/>
        <MovieContext.Provider value={{player, setPlayer}}>
            <Slot />
        </PlayerContext.Provider>
    </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
    },
});