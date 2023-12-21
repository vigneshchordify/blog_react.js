
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import AccountPage from './components/AccountPage';





function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/accounts' element={<AccountPage/>} ></Route>
      </Routes>

     
    </div>
  );
}

export default App;
