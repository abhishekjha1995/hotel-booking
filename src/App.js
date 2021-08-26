import { useState } from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import AddBooking from './components/AddBooking';
import CheckRoom from './components/CheckRoom';

function App() {
  const navigationList = [
    { id: "home", label: "Home" },
    { id: "addBooking", label: "Add Booking" },
    { id: "checkRoom", label: "Check Room" }
  ],
    [activeNav, setActiveNav] = useState("home");

  function onClickHandler(event) {
    const {listname} = event.target.dataset;

    setActiveNav(listname);
  }

  return (
    <div className="app">
      <img
        className="hotel-logo"
        src="hotel-logo.jpg"
        alt="Hotel Logo"
      />
      <h1>
        Booking System
      </h1>
      <div className="booking-system">
        <Navigation
          list={navigationList}
          activeNav={activeNav}
          onClickHandler={onClickHandler}
        />
        {
          activeNav === "addBooking" ?
          <AddBooking /> :
          activeNav === "checkRoom" ?
          <CheckRoom /> :
          "Home"
        }
      </div>
    </div>
  );
}

export default App;
