import { Text, Pressable, View, TextInput, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import Button from '../components/button';
import { MovieContext } from '../components/MovieContext';
import { useContext, useState } from 'react';

export default function Page() {
    const [playerName, setMovieName] = useState(player.name);
    const [playerposition, setPlayerPosition] = useState(player.position);
    const [playeryear, setPlayerYear] = useState(player.year);
    const [displayPosterIndex, setDisplayPosterValue] = useState(player.imageIndex.toString());
}