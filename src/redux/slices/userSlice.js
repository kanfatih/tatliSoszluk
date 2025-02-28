import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "", // İlk değer boş
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
