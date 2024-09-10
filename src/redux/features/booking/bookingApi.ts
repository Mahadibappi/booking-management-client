import { baseApi } from "./../../api/BaseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (booking) => ({
        url: "/bookings",
        method: "POST",
        body: booking,
      }),
    }),

    // getAllFacilities: builder.query({
    //   query: () => "/facility",
    // }),
    // getFacilityById: builder.query({
    //   query: (id) => `/facility/${id}`,
    // }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
