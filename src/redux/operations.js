import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642bcd3e208dfe25471fe088.mockapi.io';

export const fetchTweets = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTweets = createAsyncThunk(
    "users/editTweets",
    async (user, thunkAPI) => {
        try {
            const response = await axios.put(`/users/${user.id}`, {
                followers: user.followers,
                isFollowing: user.isFollowing
            });
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
