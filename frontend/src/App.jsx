
import Dashboard from './Views/Dashboard'
import Error404 from './Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/*" element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
