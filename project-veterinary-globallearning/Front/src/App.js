import './App.less';
import React from 'react';
import Sidebar from './Components/Sider/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'

import Veterinarios from './Components/Veterinarios/Veterinarios';
import Pacientes from './Components/Pacientes/Pacientes';
import Login from './Components/Login/Login';
function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/veterinarios' element={<Veterinarios/>}/>
        <Route path='/pacientes' element={<Pacientes/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>     
    </Router>
      
    </>
  );
}

export default App;
