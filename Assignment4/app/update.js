import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { PlayerContext } from '../components/PlayerContext';
import { useSQLiteContext } from 'expo-sqlite';
import { useRouter } from 'expo-router';

export default function Update() {
    const db = useSQLiteContext();
    const { players, setPlayers, playerIndex } = useContext(PlayerContext);
    const router = useRouter();

    const [playerName, setPlayerName] = useState('');
    const [playerAge, setPlayerAge] = useState('');
    const [playerTeam, setPlayerTeam] = useState('');
    const [playerImageURL, setPlayerImageURL] = useState('');
    const [playerPosition, setPlayerPosition] = useState('');
    const [playerRating, setPlayerRating] = useState('');

    useEffect(() => {
        const player = players[playerIndex];
        if (player) {
            setPlayerName(player.name || '');
            setPlayerAge(player.age?.toString() || '');
            setPlayerTeam(player.team || '');
            setPlayerImageURL(player.imageUrl || '');
            setPlayerPosition(player.position || '');
            setPlayerRating(player.rating?.toString() || '');
        }
    }, [playerIndex, players]);

    const savePlayerInfo = async () => {
        const updatedPlayer = {
            name: playerName,
            age: parseInt(playerAge),
            team: playerTeam,
            imageUrl: playerImageURL,
            position: playerPosition,
            rating: parseInt(playerRating)
        };
        console.log("Saving player info:", updatedPlayer);
        await db.runAsync('UPDATE players SET age = ?, team = ?, imageUrl = ?, position = ?, rating = ? WHERE name = ?', playerAge, playerTeam, playerImageURL, playerPosition, playerRating, players[playerIndex].name);
        const updatedPlayers = await db.getAllAsync('SELECT * FROM players');
        setPlayers(updatedPlayers);
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <Text>Player Name</Text>
            <TextInput style={styles.input} onChangeText={setPlayerName} value={playerName} />
            <Text>Player Age</Text>
            <TextInput style={styles.input} onChangeText={setPlayerAge} value={playerAge} keyboardType='numeric' />
            <Text>Player Team</Text>
            <TextInput style={styles.input} onChangeText={setPlayerTeam} value={playerTeam} />
            <Text>Player Image URL</Text>
            <TextInput style={styles.input} onChangeText={setPlayerImageURL} value={playerImageURL} />
            <Text>Player Position</Text>
            <TextInput style={styles.input} onChangeText={setPlayerPosition} value={playerPosition} />
            <Text>Player Rating (1-5)</Text>
            <TextInput style={styles.input} onChangeText={setPlayerRating} value={playerRating} keyboardType='numeric' />
            <Button title="Save Player" onPress={savePlayerInfo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        width: 200,
        margin: 2,
        borderWidth: 1,
        padding: 10,
    },
});



