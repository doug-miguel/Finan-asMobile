//@ts-nocheck
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import * as Animatable from "react-native-animatable";
import { UseContext } from "../../context/moduleContext";
import { API_BASE } from "@env";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassowrd] = React.useState("");
  const [error, setError] = React.useState("");
  const navigation = useNavigation();
  const { setUserData } = React.useContext(UseContext);

  async function handleLogin() {
    const ApiFetch = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await ApiFetch.json();
    if (data.token) {
      setUserData(data);
      navigation.navigate("Home", {} as any);
    } else {
      setError(data);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/DM-BLACK.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>DM Tec. Consultoria</Text>
      </View>
      <Animatable.View
        delay={500}
        animation="fadeInUp"
        style={styles.containerLogin}
      >
        <Text style={styles.titleInput}>Email</Text>
        <TextInput
          onChangeText={(event) => setEmail(event)}
          style={styles.input}
          placeholder="Digite seu email"
        />
        <Text style={styles.titleInput}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(event) => setPassowrd(event)}
          style={styles.input}
          placeholder="Digite sua senha"
        />
        {error && <Text style={styles.textError}>{error?.message}</Text>}
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.buttonLoginText}>Acessar</Text>
        </TouchableOpacity>
        <Text
          style={styles.createLogin}
          onPress={() => navigation.navigate("Createlogin", {} as any)}
        >
          Cadastre-se
        </Text>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#238CB2",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    height: "80%",
    marginHorizontal: "10%",
  },
  logoText: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  containerLogin: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    alignItems: "center",
  },
  titleInput: {
    fontSize: 20,
    marginTop: 10,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  input: {
    borderColor: "#222",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    padding: 15,
    width: "75%",
    marginTop: 10,
  },
  buttonLogin: {
    backgroundColor: "#238CB2",
    borderRadius: 10,
    width: "75%",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonLoginText: {
    color: "#fff",
  },
  createLogin: {
    marginTop: 10,
    color: "blue",
    opacity: 0.5,
  },
  textError: {
    marginTop: 10,
    color: "red",
  },
});
