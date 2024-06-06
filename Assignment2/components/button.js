import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button(props) {
  return (
    <Pressable style={[styles.button, props.isSelected && styles.selectedButton]} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    width: 50,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
  },
});
