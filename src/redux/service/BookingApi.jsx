import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8081/',
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('Token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createBooking: builder.mutation({
        query: ({ pickupPoint, destinationPoint, pickupTime, busNumber, busType, bookedNoOfSeats, perSeatAmount, totalAmount }) => ({
            url: 'booking/create',
            method: 'POST',
            params: {
              pickupPoint,
              destinationPoint,
              pickupTime,
              busNumber,
              busType,
              perSeatAmount,
              totalAmount,
            },
            body: { bookedNoOfSeats } // Pass the seats as a body instead of params
          }),
    }),
  }),
});

export const { useCreateBookingMutation } = BookingApi;
