import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navigate() {
  const navigation = useNavigation();
  const handleHome = () => {
    //@ts-ignore
    navigation.navigate("Home", {} as any);
  };
  const handleCreateVariable = () => {
    //@ts-ignore
    navigation.navigate("Home", {} as any);
  };
  const handleCreateFixend = () => {
    //@ts-ignore
    navigation.navigate("Home", {} as any);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonNavigate} onPress={handleHome}>
          <Text style={styles.buttonText}>Visão geral</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNavigate}
          onPress={handleCreateVariable}
        >
          <Text style={styles.buttonText}>Estimativa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNavigate}
          onPress={handleCreateFixend}
        >
          <Text style={styles.buttonText}>Valor real</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ed7e00",
    justifyContent: "center",
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  buttonNavigate: {
    width: "25%",
    backgroundColor: "aqua",
    borderColor: "aqua",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "#222",
    textAlign: "center",
  },
});
