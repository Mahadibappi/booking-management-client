import { baseApi } from "./../../api/BaseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (facility) => ({
        url: "/api/facility",
        method: "POST",
        body: facility,
      }),
    }),
  }),
});

export const { useCreateFacilityMutation } = authApi;
