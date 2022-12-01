import React from 'react';
import NavBar from "./NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
            <Route path='/' element={(<></>)}/>
            <Route path='/new-post' element={(<></>)}/>
            <Route path='/about' element={(<></>)}/>
            <Route path='contacts' element={(<></>)}/>
        </Routes>
    </div>
  );
}

export default App;
