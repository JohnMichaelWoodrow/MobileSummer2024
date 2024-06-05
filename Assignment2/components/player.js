import { Image, Text } from 'react-native';

export default function Player( props ) {
    return (
        <>
            <Text>{props.players.name}</Text>
            <Image source={props.imageList[props.playerIndex]} />
            <Text>{props.players.year}</Text>
            {
                props.players.actors.map( (actor) => {
                    return <Text key={actor}>{actor}</Text>
                })
            }
        </>
    );
}