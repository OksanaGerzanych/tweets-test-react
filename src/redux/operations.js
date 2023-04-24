import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642bcd3e208dfe25471fe088.mockapi.io/';

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
    async (users, thunkAPI) => {
        try {
            const response = await axios.put(`/users/${users.id}`, {
              followers: users.isFollowing ? users.followers - 1 : users.followers + 1,
              isFollowing: !users.isFollowing
            });
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
