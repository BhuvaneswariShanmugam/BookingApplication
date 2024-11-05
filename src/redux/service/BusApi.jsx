// src/redux/service/BusApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BusApi = createApi({
    reducerPath: 'busApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/' }), // Adjust the base URL accordingly
    endpoints: (builder) => ({
        // Define getAvailableSeatCount as a query
        getAvailableSeatCount: builder.query({
            query: ({ number, type }) => ({
                url: 'bus/search',
                method: 'GET',
                params: { number, type },
            }),
        }),
    }),
});

// Correctly export the query hook
export const { useGetAvailableSeatCountQuery } = BusApi;
