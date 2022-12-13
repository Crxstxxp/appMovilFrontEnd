import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Layout from "../components/Layout";
import { saveAlumno, getAlumno, updateAlumno } from "../api";

const AlumnosFormScreen = ({ navigation, route }) => {
  const [alumno, setAlumno] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setAlumno({ ...alumno, [name]: value });

  const handeSubmit = () => {
    if (!editing) {
      saveAlumno(alumno);
    } else {
      updateAlumno(route.params.id, alumno);
    }
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Actualizar" });
      setEditing(true);
      (async () => {
        const alumno = await getAlumno(route.params.id);
        setAlumno({
          nombre: alumno.nombre,
          direccion: alumno.direccion,
          telefono: alumno.telefono,
        });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor={"#576574"}
        onChangeText={(text) => handleChange("nombre", text)}
        value={alumno.nombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Direccion"
        placeholderTextColor={"#576574"}
        onChangeText={(text) => handleChange("direccion", text)}
        value={alumno.direccion}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        placeholderTextColor={"#576574"}
        onChangeText={(text) => handleChange("telefono", text)}
        value={alumno.telefono}
      />

      {!editing ? (
        <TouchableOpacity style={styles.save} onPress={handeSubmit}>
          <Text style={styles.TextButton}>Guardar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.update} onPress={handeSubmit}>
          <Text style={styles.TextButton}>Actualizar</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 35,
    color: "#ffffff",
    padding: 4,
    textAlign: "center",
    borderRadius: 5,
  },
  save: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  TextButton: {
    textAlign: "center",
    color: "#ffffff",
  },
  update: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  }
});

export default AlumnosFormScreen;
