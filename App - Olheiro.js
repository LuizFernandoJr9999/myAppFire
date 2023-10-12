import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import firebase from "./src/firebaseConnection"; // Importe o arquivo de configuração

export default function App() {
  const [nome, setNome] = useState("Carregando...!!!");
  const [idade, setIdade] = useState("");
  useEffect(() => {
    async function dados() {
      //Olheiro da nossa database
      await firebase
        .database()
        .ref("usuarios/2")
        .on("value", (snapshot) => {
          setNome(snapshot.val().nome);
          setIdade(snapshot.val().idade);
        });
      // await firebase
      //   .database()
      //   .ref("nome")
      //   .on("value", (snapshot) => {
      //     setNome(snapshot.val());
      //   });
      // await firebase
      //   .database()
      //   .ref("nome")
      //   .once("value", (snapshot) => {
      //     setNome(snapshot.val());
      //   });
    }

    dados();
  }, []);

  return (
    <View style={{ marginTop: 25, fontSize: 48 }}>
      <Text style={{ fontSize: 48 }}>Olá {nome}!!!</Text>
      <Text style={{ fontSize: 48 }}>Idade {idade}!!!</Text>
    </View>
  );
}
