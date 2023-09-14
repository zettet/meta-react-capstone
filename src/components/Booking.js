import React from "react"
import BookingForm from "./bookings/bookingForm"
import Header from "./common/Header";
import Footer from "./common/Footer";

export default class Booking extends React.Component {
  render() {
    return (
    <>
      <Header />
      <BookingForm availableTimes={this.props.availableTimes} dispatchAvailableTimes={this.props.dispatchAvailableTimes}/>
      <Footer />
    </>
    );
  }
}
