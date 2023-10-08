import { createSlice } from "@reduxjs/toolkit";
import { Live_Msg_Count } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.chat.splice(Live_Msg_Count);
      const data = action.payload;
      state.chat.unshift(...data);
    },
  },
});

export const { addItem } = chatSlice.actions;
export default chatSlice.reducer;
