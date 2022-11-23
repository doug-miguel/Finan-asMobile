import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function EditProfile() {
  const navigation = useNavigation();

  function handleCancel() {
    //@ts-ignore
    navigation.navigate("Home", {} as any);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
        <Text style={styles.buttonLoginText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#238CB2",
  },
  buttonCancel: {
    backgroundColor: "#ab2929",
    borderRadius: 10,
    width: "75%",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonLoginText: {
    color: "#fff",
  },
});
