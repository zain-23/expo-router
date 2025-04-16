import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }}
    >
      <Text>Home Page</Text>
      <Link href='/about'>About Page</Link>
      <Link href='/profile/index'>Profile Page</Link>
    </View>
  );
}
