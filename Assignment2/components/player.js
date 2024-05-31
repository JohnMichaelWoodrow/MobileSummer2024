import { Image, Text } from 'react-native';

export default function Player( props ) {
    return (
        <>
            <Text>{props.player.name}</Text>
            <Image source={props.imageList[props.playerIndex]} />
            <Text>{props.player.year}</Text>
            {
                props.player.actors.map( (actor) => {
                    return <Text key={actor}>{actor}</Text>
                })
            }
        </>
    );
}