import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { JoblyApi } from './Api';
import { NavBar } from './NavBar';
import { RouteComponent as Routes } from './RouteComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      
        <Routes/>
        
        
      
      </header>
    </div>
  );
}

export default App;
