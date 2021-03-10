const ProgramaListadoAlumnos = () => {
  const listaAlumnos = ["Ana","Bernat","Carol","David","Elena","Francesc"]
  const mostrar = (lista) => {
    const lista_formato = lista.map((elemento, index) => {
      const resultado =
        (elemento==='Bernat') ? <li>{index} - <b>{elemento}</b></li>
        : <li>{index} - vacío</li>
      return resultado
    })
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