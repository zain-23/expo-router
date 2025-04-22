import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#6a51ae'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => (
            <Pressable onPress={() => alert('Menu button click')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16
                }}
              >
                Menu
              </Text>
            </Pressable>
          )
        }}
      />
      <Stack.Screen
        name='about'
        options={{
          title: 'About'
        }}
      />
    </Stack>
  );
}
