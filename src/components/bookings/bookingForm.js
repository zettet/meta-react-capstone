import React, { useEffect, useState } from "react"

export default function BookingForm(props) {
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
        if(reservationRequest.numberOfGuests === null || reservationRequest.numberOfGuests === 0) {
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

    useEffect(() => {
        if(props.dispatchAvailableTimes != null) {
            props.dispatchAvailableTimes({
                type: 'UpdateDate',
                value: new Date(reservationRequest.date).valueOf()
            })
        }
    }, [reservationRequest.date])

    var errorMessage = <></>
    if (submitErrors.errors.length > 0) {
        const errorItems = submitErrors.errors.map(function(error){
            return(<li style={{color: "red"}}>{error}</li>)
        })
        errorMessage = <ul>
            {errorItems}
        </ul>
    }

    var timeOptions =  [<option key="-1">Select</option>]
    if(props != null && props.availableTimes != null) {
        for(var i = 0; i < props.availableTimes.length; i++) {
            timeOptions.push(<option key={i}>{props.availableTimes[i]}</option>)
        }
    }

    return (
        <>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="res-date" onChange={handleChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="res-time" onChange={handleChange}>
                    {timeOptions}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="0" min="0" max="10" id="guests" name="guests" onChange={handleChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occaision" onChange={handleChange}>
                    <option>Select</option>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="Submit">Book Now</button>
            </form>
            {errorMessage}
        </>
    );
}