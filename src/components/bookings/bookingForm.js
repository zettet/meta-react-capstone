import React, { useState } from "react"

export default function BookingForm() {
    const [reservationRequest, setReservationRequest] = useState({
        date: null,
        time: null,
        numberOfGuests: 0,
        occaision: ""
    });

    const [submitErrors, setSubmitErrors] = useState({
        errors: []
    })

    const handleSubmit = (event) => {
        var validationErrors = []
        if(reservationRequest.date === null) {
            validationErrors.push("Reservation date must be set.");
        }

        if(reservationRequest.time === null || reservationRequest.time === "Select" ) {
            validationErrors.push("Reservation Time must be set.");
        }

        //TODO: would be really helpful to validate that the date + time is set in the future.

        if(reservationRequest.numberOfGuests === null || reservationRequest.numberOfGuests == 0) {
            validationErrors.push("Number of Guests must be set.");
        }

        if(reservationRequest.occaision === null ||
            reservationRequest.occaision === "" ||
            reservationRequest.occaision === "Select") {
            validationErrors.push("Occaision must be set.")
        }

        setSubmitErrors({errors: validationErrors})
        event.preventDefault();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        var newReservationRequest = {...reservationRequest}
        if(name === "res-date") {
            newReservationRequest.date = value;
        } else if(name === "res-time") {
            newReservationRequest.time = value;
        } else if(name === "guests") {
            newReservationRequest.numberOfGuests = value;
        } else if(name === "occaision") {
            newReservationRequest.occaision = value;
        }
        setReservationRequest(newReservationRequest);
    }

    var errorMessage = <></>
    if (submitErrors.errors.length > 0) {
        const errorItems = submitErrors.errors.map(function(error){
            return(<li style={{color: "red"}}>{error}</li>)
        })
        errorMessage = <ul>
            {errorItems}
        </ul>
    }

    return (
        <>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <label for="res-date">Choose date</label>
                <input type="date" id="res-date" name="res-date" onChange={handleChange}/>
                <label for="res-time">Choose time</label>
                <select id="res-time" name="res-time" onChange={handleChange}>
                    <option>Select</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label for="guests">Number of guests</label>
                <input type="number" placeholder="0" min="0" max="10" id="guests" name="guests" onChange={handleChange}/>
                <label for="occasion">Occasion</label>
                <select id="occasion" name="occaision" onChange={handleChange}>
                    <option>Select</option>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="Submit">Submit</button>
            </form>
            {errorMessage}
        </>
    );
}