import { element } from 'prop-types';
import React from 'react';
const ProgramaListadoAlumnos = () => {
  const listaAlumnos = ["Ana", "Bernat", "Carol", "David", "Elena", "Francesc"]
  const mostrar = (lista) => {
    const lista_formato = lista.map((elemento, index) =>
    <li>{index} - {elemento}</li>
    )
    return lista_formato
  }

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        { mostrar(listaAlumnos) }
      </ul>
    </div>
  );
}
export default ProgramaListadoAlumnos