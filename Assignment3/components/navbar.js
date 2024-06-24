import { View } from 'react-native';
import { useRouter } from 'expo-router';
import Button from './button';

export default function NavBar() {
    const router = useRouter();

    const handleHome = () => {
        router.push('/');
    }
    const handleUpdate = () => {
        router.push('/update');
    }
    return (
        <View style={{ flexDirection:"row", justifyContent:"center"}}>
            <Button label={"Players"} onPress={handleHome} />
            <Button label={"Update"} onPress={handleUpdate} />
        </View>
    );
}
