import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading when no booking times exist', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm heading when no booking times exist', () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
    const bookingTimeElement = screen.getByText("17:00")
    expect(bookingTimeElement).toBeInTheDocument();
})