import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

//export default function TaskList({props}) {
//<Text> {props.data.nome</Text>
//Comentário
export default function TaskList({ data, deleteItem, editItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.linha}
        onPress={() => deleteItem(data.key)}
      >
        <Feather name="trash" color="#FFF" size={20} />
      </TouchableOpacity>

      <View style={styles.viewLinha}>
        <TouchableWithoutFeedback onPress={() => editItem(data)}>
          <Text style={styles.textoLinha}>{data.nome}</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#121212",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  linha: {
    marginRight: 10,
  },
  textoLinha: {
    color: "#FFF",
    paddingRight: 10,
  },
  viewLinha: {
    paddingRight: 10,
  },
});
