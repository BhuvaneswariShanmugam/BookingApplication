import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TripApi = createApi({
  reducerPath: 'tripApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/trip/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('Token'); 
      if (token) {
        headers.set('Authorization', `Bearer ${token}`); 
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    searchTrips: builder.mutation({
      query: ({ pickupPoint, destinationPoint, pickupTime }) => ({
        url: `search`,
        params: { pickupPoint, destinationPoint, pickupTime }, // Send params instead of body
        method: 'GET',
      }),
    }),
  }),
});

export const { useSearchTripsMutation } = TripApi;
