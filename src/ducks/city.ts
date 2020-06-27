import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCitiesApi } from './api';
import { setToken } from '../services/oauth';

//Thunk
export const getCitiesAction = createAsyncThunk(
  'cities/POST',
  async (name: string) => {
    const result = await getCitiesApi(
      name,
    );
    return result.data;
  }
);

type Entities = {
  cities: Array<{}>
  jwt: string | undefined;
};

interface State {
  entities: Entities;
  loading: 'idle' | 'loading' | 'failed' | 'forbidden' | 'loaded';
}

// InitialState
export const initialState: State = {
  entities: {
    cities: [],
    jwt: undefined
  },
  loading: 'loading',
};

export const isLoading = (state: any): any =>
  state.cities.loading === 'loading' ? true : false;

export const getCitiesData = (state: any): any =>
  state.cities.entities.cities;

export const getJwt = (state: any): any =>
 state.cities.entities.jwt

// Slice
export default createSlice({
  name: 'signup',
  initialState,
  reducers: {
    cleanCities: (state) => {
      state.entities.cities = []
    },
  },
  extraReducers: {
    [getCitiesAction.pending.type]: (state) => {
      state.loading = 'loading';
    },
    [getCitiesAction.rejected.type]: (state, action) => {
      state.loading = 'failed';
    },
    [getCitiesAction.fulfilled.type]: (state, action) => {
      state.entities.cities = action.payload;
      state.loading = 'loaded';
    },
  },
});
