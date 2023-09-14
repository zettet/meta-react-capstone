import './App.css';
import Home from './components/Home';
import Booking from './components/Booking';
import {initializeTimes, updateTimes} from './components/reducers/availableTimesReducer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useReducer} from "react"

function App() {

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
