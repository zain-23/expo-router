import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Products() {
  return (
    <View style={styles.container}>
      <Text>Products Page</Text>
      <Link
        href={{
          pathname: '/products/[id]',
          params: { id: '1' }
        }}
      >
        Product 1
      </Link>
      <Link
        href={{
          pathname: '/products/[id]',
          params: { id: '2' }
        }}
      >
        Product 2
      </Link>
      <Link
        href={{
          pathname: '/products/[id]',
          params: { id: '3' }
        }}
      >
        Product 3
      </Link>
      <Link
        href={{
          pathname: '/products/[id]',
          params: { id: '4' }
        }}
      >
        Product 4
      </Link>

      <Link href='/products/best-sellers/playstation-5'>Playstation 5 (Best Seller)</Link>
      <Link href='/products/deals/black-friday/playstation-5'>Playstation 5 (Deal)</Link>
      <Link href='/products/search/playstation-5'>Playstation 5 (Search)</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
});
