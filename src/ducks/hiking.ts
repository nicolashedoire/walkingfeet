import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getHikingsApi } from './api';
import { setToken } from '../services/oauth';

//Thunk
export const getHikingsAction = createAsyncThunk(
  'hikings/GET',
  async (props: {city: string, country: string, difficulty: string}) => {
    const result = await getHikingsApi(
        props.city,
        props.country,
        props.difficulty
    );
    return result.data;
  }
);

type Entities = {
  hikings: Array<{}>
  jwt: string | undefined;
};

interface State {
  entities: Entities;
  loading: 'idle' | 'loading' | 'failed' | 'forbidden' | 'loaded';
}

// InitialState
export const initialState: State = {
  entities: {
    hikings: [],
    jwt: undefined
  },
  loading: 'loading',
};

export const isLoading = (state: any): any =>
  state.cities.loading === 'loading' ? true : false;

export const getHikingsData = (state: any): any =>
  state.hikings.entities.hikings;

export const getJwt = (state: any): any =>
 state.hikings.entities.jwt

// Slice
export default createSlice({
  name: 'signup',
  initialState,
  reducers: {
    cleanHikings: (state) => {
      state.entities.hikings = []
    },
  },
  extraReducers: {
    [getHikingsAction.pending.type]: (state) => {
      state.loading = 'loading';
    },
    [getHikingsAction.rejected.type]: (state, action) => {
      state.loading = 'failed';
    },
    [getHikingsAction.fulfilled.type]: (state, action) => {
      state.entities.hikings = action.payload;
      state.loading = 'loaded';
    },
  },
});
