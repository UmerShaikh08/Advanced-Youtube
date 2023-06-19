import { createSlice } from "@reduxjs/toolkit";
import { Live_Msg_Count } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    massage: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.massage.splice(Live_Msg_Count);
      state.massage.unshift(action.payload);
    },
  },
});

export const { addItem } = chatSlice.actions;
export default chatSlice.reducer;
