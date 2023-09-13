import './App.css';
import Home from './components/Home';
import Booking from './components/Booking';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useReducer} from "react"

function App() {
  function initializeTimes() {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00"
    ]
  }

  function updateTimes(state, action) {
    switch(action.type) {
      case 'UpdateDate':
        return initializeTimes();
      default:
        throw new Error();
    }
  }

  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())

  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Karla:400,700,800' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Markazi Text:400,700,800' rel='stylesheet'/>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/bookings" element={<Booking availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
