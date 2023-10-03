import { Link, useNavigate } from "react-router-dom"

export const Principal = () => {
    const personajes = [{
        id: 1,
        nombre: "Goku",
        imagen: "https://elcomercio.pe/resizer/BlJXyaglWl7WlmiC_iCdeXdsWAg=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DBQJRNWZHZATZHBQJT37EC5XNQ.jpg"
    }, {
        id: 2,
        nombre: "Vegeta",
        imagen: "https://staticg.sportskeeda.com/editor/2022/03/94200-16470225783956-1920.jpg?w=840"
    }, {
        id: 3,
        nombre: "Gohan",
        imagen: "https://www.fayerwayer.com/resizer/nd9O_rjK9QL5EgcBfOIzWJw9Q3U=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/EPNKCL3HHVG5TEUGOTRZ5MSYKM.JPG"
    }]

    const navigate = useNavigate()
    const irPersonaje = (name) =>{
        console.log(name)
        navigate(`/personaje/${name}`)
    }
    return (
        <div>
            <h1>Esta es la pagina Principal de mi APP</h1>
            <div className="flex items-center gap-3 font-bold">
                {personajes.map((per) => (
                    <div key={per.id} className="shadow-lg p-5 hover:scale-110">
                        <img src={per.imagen} alt="" width={200} height={200} />
                        <p>{per.nombre}</p>
                        <button onClick={()=>irPersonaje(per.nombre)} className="bg-blue-500 p-2 rounded-md text-white">Ver Mas</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
