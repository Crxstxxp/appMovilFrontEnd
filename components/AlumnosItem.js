import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AlumnosItem = ({ alumnos, handelDelete }) => {

    const navegation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navegation.navigate('AlumnosFormScreen', {id: alumnos.id})}>
        <Text style={styles.itemTitle}>{alumnos.nombre}</Text>
        <Text style={styles.itemTitle}>{alumnos.direccion}</Text>
        <Text style={styles.itemTitle}>{alumnos.telefono}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress = {() => handelDelete(alumnos.id)}
      >
        <Text style={{ color: "#ffffff" }}> Delete </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "#ffffff",
  },
});

export default AlumnosItem;
