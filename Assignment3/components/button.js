import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, isSelected }) {
    return (
        <View style={isSelected ? styles.selectedButtonContainer : styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 100,
        height: 48,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: "#444",
    },
    selectedButtonContainer: {
        width: 100,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: "#888",
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
