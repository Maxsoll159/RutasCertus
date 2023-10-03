import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Contactenos } from "../pages/Contactenos"
import { Principal } from "../pages/Principal"
import { Error404 } from "../pages/Error404"
import { Personaje } from "../pages/Personaje"
export const RoutesApp = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contactenos" element={<Contactenos />} />
            <Route path="/personaje/:name" element={<Personaje />} />
            <Route path="/*" element={<Error404 />} />
        </Routes>
    </div>
  )
}
