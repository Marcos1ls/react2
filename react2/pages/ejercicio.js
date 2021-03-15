import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'

const ProgramaListadoAlumnos = () => {
  const listaDatos = ["Ana", "Bernat", "Carol", "David", "Elena", "Francesc"]
  const [nombre, setNombre] = useState('')
  const [listaAlumnos, setListaAlumnos] = useState(listaDatos)

  const empiezaLetra = (cadena) => /^[a-zA-Z]/.test(cadena)
  const noestaVacio = (cadena) => cadena.trim() !=0

  const mostrar = (lista) => {
    const lista_formato = lista.map((elemento, index) => {
      return <div>
        <li>{index} - <b>{elemento}</b></li>
      </div>
    })
    return lista_formato
  }

  const eliminarAlumno = () => {
    console.log(nombre)
    const arrayFiltrado = listaAlumnos.filter(alumno => alumno !== `${nombre}`)
    console.log(arrayFiltrado)
    setListaAlumnos(arrayFiltrado)
  }

  const agregarAlumno = e => {
    e.preventDefault()
    const validar = noestaVacio(nombre) && empiezaLetra(nombre)

    validar && setListaAlumnos([
      ...listaAlumnos, nombre
    ])

    validar && setNombre('')
    !validar && setNombre('Dato no válido')
  }
  
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {mostrar(listaAlumnos)}
      </ul>
      <form onSubmit={agregarAlumno}>
        <input
        type='text'
        placeholder='Introduce nuevo alumno'
        onChange={e => setNombre(e.target.value)}
        value={nombre}
        />
      </form>
      <Button onClick={() => eliminarAlumno()}>
        Eliminar
      </Button>
  </div>
  )
}

export default ProgramaListadoAlumnos