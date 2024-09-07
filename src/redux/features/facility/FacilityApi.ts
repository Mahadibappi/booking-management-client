import { baseApi } from "./../../api/BaseApi";

const FacilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (facility) => ({
        url: "/facility",
        method: "POST",
        body: facility,
      }),
    }),
  }),
});

export const { useCreateFacilityMutation } = FacilityApi;
