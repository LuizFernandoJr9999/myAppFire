import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
//import firebase from "./src/firebaseConnection"; // Importe o arquivo de configuração
import Login from "./src/components/Login";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>DENTRO DA TELA TAREFAS</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: "#fef6fc",
  },
  texto: {
    fontSize: 20,
  },
});
