import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/copyright-g12b41ccea_640.png")}
      ></Image>
      <Text>Todos os direitos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#238CB2",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: 20,
    maxHeight: 20,
    marginRight: 10,
  },
});
