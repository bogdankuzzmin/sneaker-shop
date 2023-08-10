import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sneakersApi = createApi({
  reducerPath: 'sneakersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sneakers-28a90-default-rtdb.firebaseio.com/' }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: `/sneakers.json`
      })
    })
  })
});

