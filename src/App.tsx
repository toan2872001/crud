import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Create } from './components/Create';
import { Read } from './components/Read';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Update } from './components/Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Create />}></Route>
      <Route path='/read' element={< Read />}></Route>
      <Route path='/update' element={< Update />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
