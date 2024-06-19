import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Button from './button';

export default function NavBar() {
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };
  const handleEdit = () => {
    router.push('/edit');
  };

  return (
    <View style={styles.navbar}>
      <Button label={"Player"} onPress={handleHome} />
      <Button label={"Edit"} onPress={handleEdit} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
