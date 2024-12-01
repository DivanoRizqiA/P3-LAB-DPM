import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#007bff',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
