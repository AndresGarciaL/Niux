
import Error404 from "./Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Importaciones Users */
import Contacto from "./Views/Contacto";
import Catalogue from "./Views/Catalogue";
import Home from './Views/Home';
/* Importaciones Dashboard */
import Dashboard from "./Views/Dashboard";
import Home_Dash from "./Views/Home_Dash";
import Users_Dash from "./Views/Users_Dash";
import Tickets_Dash from "./Views/Tickets_Dash";
import EditarUsuario from "./Components/Dashboard/Users/EditarUsuario";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* Rutas Users */}
        <Route path="/" element={<Home/>}/>
        <Route path="/catalogue" element={<Catalogue />} /> 
        <Route path="/Contacto" element={<Contacto />} />
        


        {/* Rutas Dashboard */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home_Dash />} />
        <Route path="users" element={<Users_Dash />}></Route>
        <Route path="update-user" element={<EditarUsuario />}></Route>
        <Route path="tickets" element={<Tickets_Dash />}></Route>
      </Route>
      

        {/* Rutas Error */}
      <Route path="/*" element={<Error404 />} />
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
