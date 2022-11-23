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

  function EditProfile() {
    //@ts-ignore
    navigation.navigate("EditProfile", {} as any);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <TouchableOpacity onPress={EditProfile} style={styles.buttonNameLogo}>
          <Text style={styles.nameLogo}>
            {userModel?.name?.substr(0, 1).toLocaleUpperCase()}
          </Text>
        </TouchableOpacity>
        <Text style={styles.name}>Bem vindo {userModel.name}!</Text>
      </View>
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
  containerName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNameLogo: {
    backgroundColor: "aqua",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
  },
  nameLogo: {
    paddingHorizontal: 12,
    paddingVertical: 10,
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
