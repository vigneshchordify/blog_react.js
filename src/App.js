
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>

     
    </div>
  );
}

export default App;
