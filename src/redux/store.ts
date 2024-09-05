import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/AuthSlice";
import facilityReducer from "./features/facility/FacilitySlice";
import { baseApi } from "./api/BaseApi";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    facility: facilityReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
