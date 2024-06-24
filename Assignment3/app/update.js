import { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from '../components/button';
import { PlayerContext } from '../components/PlayerContext';
import { useRouter } from 'expo-router';

export default function Update() {
    const { players, playerIndex, setPlayerIndex } = useContext(PlayerContext);
    const player = players[playerIndex];
    const [playerName, setPlayerName] = useState(player.name);
    const [playerAge, setPlayerAge] = useState(player.age.toString());
    const [playerTeam, setPlayerTeam] = useState(player.team);
    const [playerImageURL, setPlayerImageURL] = useState(player.imageUrl);
    const router = useRouter();

    const updatePlayerInfo = () => {
        const updatedPlayer = { ...player, name: playerName, age: parseInt(playerAge), team: playerTeam, imageUrl: playerImageURL };
        players[playerIndex] = updatedPlayer;
        setPlayerIndex(playerIndex);
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
            <Button label="Update" onPress={updatePlayerInfo} />
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
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


