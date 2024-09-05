import { createSlice } from "@reduxjs/toolkit";

type TFacility = {
  id: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: string;
};

type TFacilityState = {
  facilities: TFacility[];
};
const initialState: TFacilityState = {
  facilities: [],
};

const FacilitySlice = createSlice({
  name: "facility",
  initialState,
  reducers: {
    createFacility: (state, action) => {
      const { facility } = action.payload;
      state.facilities.push(facility);
    },
  },
});

export const { createFacility } = FacilitySlice.actions;
export default FacilitySlice.reducer;
