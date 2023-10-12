import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import firebase from "./src/firebaseConnection"; // Importe o arquivo de configuração
//Comentário
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        alert("Bem-vindo: " + value.user.email);
        setUser(value.user.email);
      })
      .catch((error) => {
        alert("Ops algo deu errado!");
        setUser("");
        return;
      });
    setEmail("");
    setPassword("");
  }

  async function logout() {
    await firebase.auth().signOut();
    setUser("");
    alert("Deslogado com sucesso!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      />

      <Button title="Acessar" onPress={logar} />

      <Text style={styles.resposta}>{user}</Text>

      {user.length > 0 ? (
        <Button title="Deslogar" onPress={logout} />
      ) : (
        <Text style={styles.resposta}>Nenhum usuário está logado.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
    height: 45,
    fontSize: 17,
  },
  resposta: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 23,
    textAlign: "center",
  },
});
