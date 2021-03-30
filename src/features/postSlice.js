import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: "postid",
  initialState: {
    postid: null,
  },
  reducers: {
   
   
    postIn: (state, action) => {
      state.postid = action.payload;
    },

    

    
  },
});

export const { postIn, postOut} = postSlice.actions;





export const selectPost = state => state.postid.postid;

export default postSlice.reducer;
