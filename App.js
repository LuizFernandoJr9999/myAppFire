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

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        //alert(value.user.uid);
        firebase.database().ref("usuarios").child(value.user.uid).set({
          nome: name,
          email: password,
        });
        alert("Usuario criado com Sucesso!");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert("Algo deu errado!");
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setName(texto)}
        value={name}
      />
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

      <Button title="Cadastrar" onPress={cadastrar} />
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
