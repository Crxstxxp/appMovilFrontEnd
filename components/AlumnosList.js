import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { getAlumnos, deleteAlumno } from "../api";

import AlumnosItem from "./AlumnosItem";

const alumnosList = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadAlumnos = async () => {
    const data = await getAlumnos();
    setAlumnos(data);
    //console.log('cargao')
  };

  useEffect(() => {
    loadAlumnos();
  }, []);

  const handelDelete = async (id) => {
    await deleteAlumno(id);
    await loadAlumnos();
  };

  const renderItem = ({ item }) => {
    //return <Text>{item.nombre}</Text>;
    return <AlumnosItem alumnos={item} handelDelete={handelDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setAlumnos(true);
    await loadAlumnos();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={alumnos}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default alumnosList;
