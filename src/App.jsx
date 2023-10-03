import { Link, NavLink } from "react-router-dom"
import { RoutesApp } from "./routes/RoutesApp"

function App() {
  return (
    <div>
      <nav>
        <ul className="flex items-center gap-3 py-3 bg-green-500 text-white font-bold">
          <li><Link to="/">Principal</Link></li>
          <li><Link to="/contactenos">Contactenos</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </nav>


      <nav>
        <ul className="flex items-center gap-3 py-3 bg-green-500 text-white font-bold">
          <li><NavLink 
          className={ ({isActive})=>(isActive ? "text-red-500" : "text-white")} to="/">Principal</NavLink></li>
          <li><NavLink 
          className={ ({isActive})=>(isActive ? "text-red-500" : "text-white")} to="/contactenos">Contactenos</NavLink></li>
          <li><NavLink 
          style={({isActive})=>({
            color: isActive ? "blue" : "white"
          })} to="/home">Home</NavLink></li>
        </ul>
      </nav>

      {/*TODAS NUESTRAS RUTAS */}
      <RoutesApp />
    </div>

  )
}

export default App
