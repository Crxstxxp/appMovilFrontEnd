//Para acceder a los datos se utiliza la direccion ip del computador en ves de 'localhost'
const API = "http://172.20.99.72:3000/alumnos";

export const getAlumnos = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const saveAlumno = async (newAlumno) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newAlumno),
  });
  return await res.json();
};

export const deleteAlumno = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const getAlumno = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const updateAlumno = async (id, newAlumno) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newAlumno),
  });
  return res;
};
