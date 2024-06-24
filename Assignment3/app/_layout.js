import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/navbar';
import { PlayerProvider } from '../components/PlayerContext';

export default function HomeLayout() {
    return (
        <View style={styles.container}>
            <NavBar />
            <PlayerProvider>
                <Slot />
            </PlayerProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 90,
    },
});



