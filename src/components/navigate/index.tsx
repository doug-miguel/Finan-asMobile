import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Navigate() {
  return (
    <View style={styles.container}>
      <Text>Navigate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
});
