import { Slot } from 'expo-router';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'gray',
    padding: 20
  },
  headerText: {
    color: 'black'
  },
  footer: {
    backgroundColor: 'black',
    padding: 20
  },
  footerText: {
    color: 'black'
  }
});
