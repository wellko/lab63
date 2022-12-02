import React from 'react';
import NavBar from "./NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from "./PostForm/PostForm";
import HomePage from "./HomePage/HomePage";
import PostPage from "./PostPage/PostPage";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
            <Route path='/' element={(<HomePage/>)}/>
            <Route path='/:id' element={(<PostPage/>)}/>
            <Route path='/new-post' element={(<PostForm/>)}/>
            <Route path='/about' element={(<></>)}/>
            <Route path='contacts' element={(<></>)}/>
        </Routes>
    </div>
  );
}

export default App;
