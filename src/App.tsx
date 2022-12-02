import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from "./Components/PostForm/PostForm";
import HomePage from "./Components/HomePage/HomePage";
import PostPage from "./Components/PostPage/PostPage";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
            <Route path='/' element={(<HomePage/>)}>
            <Route path='/:id' element={(<PostPage/>)}>
                <Route path='edit' element={(<PostForm/>)}/>
            </Route>
            </Route>
            <Route path='/new-post' element={(<PostForm/>)}/>
            <Route path='/about' element={(<About/>)}/>
            <Route path='contacts' element={(<Contacts/>)}/>
        </Routes>
    </div>
  );
}

export default App;
