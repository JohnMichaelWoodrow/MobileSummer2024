import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { useRouter } from 'expo-router';

export default function AddPlayer() {
    const db = useSQLiteContext();
    const router = useRouter();
    const [playerName, setPlayerName] = useState('');
    const [playerAge, setPlayerAge] = useState('');
    const [playerTeam, setPlayerTeam] = useState('');
    const [playerImageURL, setPlayerImageURL] = useState('');
    const [playerPosition, setPlayerPosition] = useState('');
    const [playerRating, setPlayerRating] = useState('');

    const addPlayer = async () => {
        const newPlayer = { name: playerName, age: parseInt(playerAge), team: playerTeam, imageUrl: playerImageURL, position: playerPosition, rating: parseInt(playerRating) };
        console.log("Adding player info:", newPlayer);
        await db.runAsync('INSERT INTO players (name, age, team, imageUrl, position, rating) VALUES (?, ?, ?, ?, ?, ?)', playerName, playerAge, playerTeam, playerImageURL, playerPosition, playerRating);
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <Text>Player Name</Text>
            <TextInput style={styles.input} onChangeText={setPlayerName} value={playerName} />
            <Text>Player Age</Text>
            <TextInput style={styles.input} onChangeText={setPlayerAge} value={playerAge} />
            <Text>Player Team</Text>
            <TextInput style={styles.input} onChangeText={setPlayerTeam} value={playerTeam} />
            <Text>Player Image URL</Text>
            <TextInput style={styles.input} onChangeText={setPlayerImageURL} value={playerImageURL} />
            <Text>Player Position</Text>
            <TextInput style={styles.input} onChangeText={setPlayerPosition} value={playerPosition} />
            <Text>Player Rating (1-5)</Text>
            <TextInput style={styles.input} onChangeText={setPlayerRating} value={playerRating} keyboardType='numeric' />
            <Button title="Add Player" onPress={addPlayer} />
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


