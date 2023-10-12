import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "./src/firebaseConnection"; // Importe o arquivo de configuração

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>App Tarefas</Text>
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
});
