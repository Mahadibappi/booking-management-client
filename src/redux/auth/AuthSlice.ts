/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
export type TUser = {
  email: "string";
  password: "string";
};
type TInitialState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
  },
});

export const { loginUser } = AuthSlice.actions;
export default AuthSlice.reducer;
