import './App.css';
import Home from './components/Home';
import Booking from './components/Booking';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
