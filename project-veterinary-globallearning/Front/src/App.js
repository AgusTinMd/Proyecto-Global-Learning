import './App.css';
import React from 'react';
import Sidebar from './Components/Sider/Sidebar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home'

import Veterinarios from './Components/Veterinarios/veterinarios';
import Pacientes from './Components/Pacientes/pacientes'
function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/veterinarios' element={<Veterinarios/>}/>
        <Route path='/pacientes' element={<Pacientes/>}/>

      </Routes>
    </Router>
      
    </>
  );
}

export default App;
