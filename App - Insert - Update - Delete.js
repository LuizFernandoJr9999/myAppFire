import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInputProperties,
  Button,
  TextInput,
} from "react-native";
import firebase from "./src/firebaseConnection"; // Importe o arquivo de configuração

export default function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  useEffect(() => {
    async function dados() {
      //Criar um nó
      //await firebase.database().ref("tipo").set("Vendedor");
      //Remover um nó
      //await firebase.database().ref("tipo").remove();
      //Incluir um filho em usuarios
      //await firebase.database().ref("usuarios").child(3).set({
      //  nome: "José",
      //  cargo: "Programador Junior",
      //});
      //Atualizar um campo sem apagar os demais campos.
      //await firebase.database().ref("usuarios").child("3").update({
      //  nome: "José Augusto Junior",
      // });
    }

    dados();
  }, []);

  async function cadastrar() {
    if ((nome !== "") & (cargo !== "")) {
      //Incluir um filho em usuarios
      let usuarios = await firebase.database().ref("usuarios");
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo,
      });

      alert("Cadastrado com Sucesso!");
      setNome("");
      setCargo("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
        value={cargo}
      />
      <Button title="Novo Funcionário" onPress={cadastrar} />
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
});
