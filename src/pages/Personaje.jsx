import { useParams } from "react-router-dom"

export const Personaje = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
        <h1>soy la pagina del Personaje {params.name}</h1>
    </div>
  )
}
