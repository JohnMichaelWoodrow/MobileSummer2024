import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Player from '../components/player';
import Button from '../components/button';
import { PlayerContext } from '../components/PlayerContext';

export default function Home() {
    const { players, playerIndex, setPlayerIndex } = useContext(PlayerContext);

    return (
        <View style={styles.container}>
            <Player players={players[playerIndex]} />
            <View style={styles.buttonContainer}>
                {players.map((_, index) => (
                    <Button
                        key={index}
                        label={index + 1}
                        onPress={() => setPlayerIndex(index)}
                        isSelected={index === playerIndex}
                    />
                ))}
            </View>
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

