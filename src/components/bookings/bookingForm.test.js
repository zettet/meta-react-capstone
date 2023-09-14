import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading when no booking times exist', () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm heading when no booking times exist', () => {
    render(
        <BrowserRouter>
            <BookingForm availableTimes={["17:00", "18:00"]}/>
        </BrowserRouter>
    )
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
    const bookingTimeElement = screen.getByText("17:00")
    expect(bookingTimeElement).toBeInTheDocument();
})