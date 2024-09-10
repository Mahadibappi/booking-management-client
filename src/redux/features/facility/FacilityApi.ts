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

    getAllFacilities: builder.query({
      query: () => "/facility",
    }),
    getFacilityById: builder.query({
      query: (id) => `/facility/${id}`,
    }),
  }),
});

export const {
  useCreateFacilityMutation,
  useGetAllFacilitiesQuery,
  useGetFacilityByIdQuery,
} = FacilityApi;
