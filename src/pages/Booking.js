import React from "react"
import BookingForm from "../components/bookings/bookingForm"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

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
