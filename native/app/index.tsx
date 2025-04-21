import { Link, router } from 'expo-router';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
      }}
    >
      <Text>Home Page</Text>
      <Link href='/about'>About Page</Link>
      <Link href='/profile'>Profile Page</Link>

      <Link
        href='/products'
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Products Page</Text>
        </Pressable>
      </Link>

      <Button
        title='Login'
        onPress={() => router.replace('/profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0ea5e9',
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  }
});
