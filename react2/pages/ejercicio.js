import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import shortid from 'shortid'


const ProgramaListadoAlumnos = () => {
  const listaDatos = [
    {
      "id":'43DNI',
      "nombre":'Ana',
      "apellido":'García'
    },
    {
      "id":'59DNI',
      "nombre":'Bernat',
      "apellido":'Palomera'
    }
  ]

  const [nombre, setNombre] = useState('')
  const [listaAlumnos, setListaAlumnos] = useState(listaDatos)

  const empiezaLetra = (cadena) => /^[a-zA-Z]/.test(cadena)
  const noestaVacio = (cadena) => cadena.trim() !=0

  const mostrar = (lista) => {
    const lista_formato = lista.map((elemento, index) => {
      return <div>
                <li key={index}>
                  <b>{index} - {elemento.id}</b> - {elemento.nombre}:<b> </b> 
                  
                  <Button variant="outlined" color="primary" onClick={() => eliminarAlumno(elemento.id)}>
                    Eliminar
                  </Button>
                </li>
            </div>
    })
    return lista_formato
  }

  const eliminarAlumno = (id) => {
    const arrayFiltrado = listaAlumnos.filter(alumno => alumno.id !== id)
    setListaAlumnos(arrayFiltrado)
  }

  const agregarAlumno = e => {
    e.preventDefault()
    const validar = noestaVacio(nombre) && empiezaLetra(nombre)
    validar && setListaAlumnos([...listaAlumnos,
      {
        id: shortid.generate(),
        nombre: nombre,
        apellido: "apellido"
      }
    ])

    validar && setNombre('')
    !validar && setNombre('Dato no válido')
  }
  
  return (
    <div>
      <h1>Lista de Alumnos</h1>
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
  </div>
  )
}

export default ProgramaListadoAlumnos