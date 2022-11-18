import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { UseContext } from "../../context/moduleContext";

interface IuserModal {
  createdAt: string;
  email: string;
  id: string;
  name: string;
}

export default function Header() {
  const { userData, setUserData } = React.useContext(UseContext);
  const navigation = useNavigation();
  //@ts-ignore
  const userModel: IuserModal = userData?.userModel;

  function logout() {
    setUserData(null as any);
    //@ts-ignore
    navigation.navigate("Login", {} as any);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Bem vindo {userModel.name}!</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={styles.logOut}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#238CB2",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 50,
    borderColor: "#222",
  },
  logOut: {
    opacity: 0.4,
    fontSize: 18,
    marginRight: 10,
  },
});