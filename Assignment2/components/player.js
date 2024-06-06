import { Image, Text, View, StyleSheet } from 'react-native';

export default function Player(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Top 3 Random Raptors Role Players</Text>
    <Text style={styles.title}>{props.players.name}</Text>
    <Image source={props.imageList[props.playerIndex]} style={styles.image}/>
    <Text style={styles.heading}>Position:</Text>
    <Text style={styles.text}>{props.players.position}</Text>
    <Text style={styles.heading}>Years As A Raptor:</Text>
    <Text style={styles.text}>{props.players.year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

