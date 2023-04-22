import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets } from './operations'

export const tweetsSlice = createSlice({
    name: 'tweets',
  initialState: {
    items: [],
    error: null,
  }, extraReducers:{
    [fetchTweets.fulfilled](state, action){
      state.error = null;
      state.items = action.payload;
    },
    [fetchTweets.rejected](state, action){
        state.error = action.payload;
      },
  }
}

)

export const tweetsReducer = tweetsSlice.reducer;
