
import Dashboard from './Views/Dashboard'
import Error404 from './Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from './Views/Contacto';
import Home from './Views/Home';

function App() {


  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/Contacto" element={<Contacto/>}/>
      <Route path="/Error" element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
