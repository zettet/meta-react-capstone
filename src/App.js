import './App.css';
import Home from './components/Home';
import Booking from './components/Booking';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Karla:400,700,800' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Markazi Text:400,700,800' rel='stylesheet'/>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/bookings" element={<Booking/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
