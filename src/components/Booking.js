import React from "react"
import BookingForm from "./bookings/bookingForm"
import Header from "./common/Header";
import Footer from "./common/Footer";

export default class Booking extends React.Component {
  render() {
    return (
    <>
      <meta name="description" content="Little Lemon Restaurant Website Reservation Booking"/>
      <meta name="og:title" content="Little Lemon Restaurant Reservations"/>
      <meta name="og:description" content="Book a reservation at little lemon!"/>
      <meta name="og:image" content="https://upload.wikimedia.org/wikipedia/commons/e/e4/Lemon.jpg"/>
      <Header />
      <BookingForm />
      <Footer />
    </>
    );
  }
}
