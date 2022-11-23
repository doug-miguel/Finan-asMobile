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
      <View style={styles.containerView}></View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#238CB2",
  },
  containerView: {
    flex: 8,
    backgroundColor: "#fff",
  },
});
