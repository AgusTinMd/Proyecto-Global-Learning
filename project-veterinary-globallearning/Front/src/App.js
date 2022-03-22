import './App.css';
import React from 'react';
import Sidebar from './Components/Sider/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Sidebar/>     
    </Router>
      
    </>
  );
}

export default App;
