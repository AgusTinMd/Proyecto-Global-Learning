import './App.less';
import React from 'react';
import Sidebar from './Components/Sider/Sidebar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Veterinarios from './Components/Veterinarios/Veterinarios';
import Pacientes from './Components/Pacientes/Pacientes';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom';
import RequireAuth from './auth/RequireAuth';


function App() {
  return (
    <>
    <Router>
      <Routes> 
        <Route exact path= '/login' element={<Login/>}/>
        <Route element={<RequireAuth/>}>
          <Route path= '/' element={<Sidebar/>}>
            <Route path='/veterinarios' element={<Veterinarios/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/pacientes' element={<Pacientes/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
