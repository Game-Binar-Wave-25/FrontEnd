import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Register} from "./pages/RegisterPage";
import {Profile} from "./pages/ProfilePage"
import { Login } from "./pages/LoginPage";
import {Landing} from "./pages/LandingPage"
import {Home} from "./pages/HomePage"
import {GameList} from "./pages/GameListPage"
import {GameDetail} from "./pages/GameDetailPage"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Register' element={<Register type='Register'/>}/>
          <Route path='/Profile' element={<Profile type='Profile'/>}/>
          <Route path='/Login' element={<Login type='Login'/>}/>
          <Route path='/Landing' element={<Landing type='Landing'/>}/>
          <Route path='/' element={<Home type='Home'/>}/>
          <Route path='/GameList' element={<GameList type='GameList'/>}/>
          <Route path='/GameDetail' element={<GameDetail type='GameDetail'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;