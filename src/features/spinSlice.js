import { createSlice } from '@reduxjs/toolkit';

export const spinSlice = createSlice({
  name: "isSpinning",
  initialState: {
    isSpinning: null,
  },
  reducers: {
   
   
    spinOn: (state, action) => {
      state.isSpinning = action.payload;
    },

    spinOff :(state,action)=>{

      state.isSpinning=null;



    },

    

    
  },
});

export const {spinOn, spinOff} = spinSlice.actions;





export const selectSpin = state => state.isSpinning.isSpinning;

export default spinSlice.reducer;
