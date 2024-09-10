import { createSlice } from "@reduxjs/toolkit";

type TBooking = {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  payableAmount: number;
};

type TBookingState = {
  bookings: TBooking[];
};
const initialState: TBookingState = {
  bookings: [],
};

const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    createBooking: (state, action) => {
      const { booking } = action.payload;
      state.bookings.push(booking);
    },
  },
});

export const { createBooking } = BookingSlice.actions;
export default BookingSlice.reducer;
