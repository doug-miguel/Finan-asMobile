import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navigate from "../../components/navigate";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Navigate />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
});
