import React from 'react'
import { useState } from 'react'

const ProgramaListadoAlumnos = () => {

  const listaDatos = ["Ana","Bernat","Carol","David","Elena","Francesc"]
  const [nombre, setNombre] = useState('')
  const [listaAlumnos, setListaAlumnos] = useState(listaDatos)

  const mostrar = (lista) => {
    const lista_formato = lista.map((elemento, index) => {
      return <li>{index} - <b>{elemento}</b></li>
    })
    return lista_formato
  }

  const agregarAlumno = e => {
    e.preventDefault()
    if(!nombre.trim()){
      console.log('Campo vacío')
      return
    }
    setListaAlumnos([
      ...listaAlumnos, nombre
    ])
    setNombre('')
  }

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {mostrar(listaAlumnos)}
      </ul>
      <form onSubmit={agregarAlumno}>
        <input
        type="text"
        placeholder="Introduce nuevo alumno"
        onChange={e => setNombre(e.target.value)}
        value={nombre}
        />
      </form>
    </div>
  )
}
export default ProgramaListadoAlumnos