import { Routes, Route } from 'react-router-dom';
import './App.css';
import Feedback from './pages/Feedback';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
//import {AddBook} from "./pages/AddBook";

function App() {
    return(
        <div className="Login-component">
        <Routes>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/shop' element={<Shop/>}/>
            
            <Route path='/' element={<Main/>}/>
        </Routes>
        </div>
        )
}

export default App;
