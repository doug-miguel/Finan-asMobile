//@ts-nocheck
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { API_BASE } from "@env";
import { useNavigation } from "@react-navigation/native";

export default function CreateLogin() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassowrd] = React.useState("");
  const [error, setError] = React.useState("");
  const navigation = useNavigation();

  async function handleLogin() {
    const ApiFetch = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await ApiFetch.json();
    if (data?.message === "Usuário criado com sucesso!") {
      navigation.navigate("Login", {} as any);
    } else {
      setError(data);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.containerTitle}>Cadastrar-se</Text>
      <View style={styles.containerRegister}>
        <Text style={styles.titleInput}>Nome</Text>
        <TextInput
          onChangeText={(event) => setName(event)}
          style={styles.input}
          placeholder="Digite seu email"
        />
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
          <Text style={styles.buttonLoginText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#238CB2",
  },
  containerTitle: {
    flex: 1,
    paddingTop: 10,
    fontSize: 30,
    textAlign: "center",
  },
  containerRegister: {
    flex: 7,
    paddingTop: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
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
  titleInput: {
    fontSize: 20,
    marginTop: 10,
    justifyContent: "flex-start",
    alignContent: "flex-start",
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
  textError: {
    marginTop: 10,
    color: "red",
  },
});
