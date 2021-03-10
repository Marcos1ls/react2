import { useState } from 'react'

const ProgramaListadoAlumnos = () => {
    const listaDatos = ["Ana", "Bernat", "Carol", "David", "Elena", "Francesc"]
    const [nombre, setNombre] = useState('')
    const [listaAlumnos, setListaAlumnos] = useState(listaDatos)
    const empiezaLetra = (cadena) => /^[a-zA-Z]/.test(cadena)
    const noestaVacio = (cadena) => cadena.trim() != 0

    const mostrar = (lista) => {
      const lista_formato = lista.map((elemento, index) => {
        return <li> {index} - <b> {elemento} </b></li>
      })
      return lista_formato
    }
    const agregarAlumno = e => {
      e.preventDefault()
      const validar = noestaVacio(nombre) && empiezaLetra(nombre)
      
      validar && setListaAlumnos([
        ...listaAlumnos, nombre
      ])
      
      validar && setNombre('')
      !validar && alert('Dato no válido')
    }
    return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {mostrar(listaAlumnos)}
      </ul>
      <form onSubmit = {agregarAlumno}>
        <input
        type="text"
        placeholder="Introduce nuevo alumno"
        onChange = {e => setNombre(e.target.value)}
        value = {nombre}
        minLength="2"
        maxLength="10"
        />
      </form>
    </div>
  )}
export default ProgramaListadoAlumnos