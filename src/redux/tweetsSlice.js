import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets, editTweets } from './operations';

export const tweetsSlice = createSlice({
    name: 'tweets',
    initialState: {
    items: [],
    isLoading: false,
    error: null,
  }, 
  extraReducers: {
    [fetchTweets.pending](state) {
      state.isLoading =  true;
    },
    [fetchTweets.fulfilled](state, action) {
      state.isLoading =  false;
      state.error = null;
      state.items = action.payload;
    },
      [fetchTweets.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      [editTweets.pending](state) {
      state.isLoading =  true;
    },
    [editTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.forEach(item => {
        if (item.id !== action.payload.id) {
          return 
        }
        item.followers = action.payload.followers;
        item.isFollowing = action.payload.isFollowing;
      });
    },
      [editTweets.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      }
  }
}
)
export const tweetsReducer = tweetsSlice.reducer;
