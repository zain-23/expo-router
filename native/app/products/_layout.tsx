import { StyleSheet, Text, View } from 'react-native';
import { Slot } from 'expo-router';

export default function ProductLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <View style={styles.discountedProduct}>
        <Text>Discounted Products</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  discountedProduct: {
    backgroundColor: 'orange',
    padding: 12,
    width: '100%'
  }
});
