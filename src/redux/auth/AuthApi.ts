// api/authApi.ts
import { baseApi } from "../api/BaseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    createAdmin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/admin",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useCreateAdminMutation } =
  authApi;
