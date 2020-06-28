import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getHikingsApi, getHikingByIdApi } from './api';

//Thunk
export const getHikingsAction = createAsyncThunk(
  'hikings/GET',
  async (props: { city: string, country: string, difficulty: string }) => {
    const result = await getHikingsApi(
      props.city,
      props.country,
      props.difficulty
    );
    return result.data;
  }
);

export const getHikingByIdAction = createAsyncThunk(
  'hikings/GetById',
  async (id: string) => {
    const result = await getHikingByIdApi(id);
    return result.data;
  }
);


type Entities = {
  hikings: Array<{}>
  hiking: any;
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
    hiking: null,
    jwt: undefined
  },
  loading: 'loading',
};

export const isLoading = (state: any): any =>
  state.cities.loading === 'loading' ? true : false;

export const getHikingsData = (state: any): any =>
  state.hikings.entities.hikings;

export const getHikingData = (state: any): any =>
  state.hikings.entities.hiking;

export const getJwt = (state: any): any =>
  state.hikings.entities.jwt

// Slice
export default createSlice({
  name: 'hikings',
  initialState,
  reducers: {
    cleanHikings: (state) => {
      state.entities.hikings = []
    },
    cleanHiking: (state) => {
      state.entities.hiking = null
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
    [getHikingByIdAction.pending.type]: (state) => {
      state.loading = 'loading';
    },
    [getHikingByIdAction.rejected.type]: (state, action) => {
      state.loading = 'failed';
    },
    [getHikingByIdAction.fulfilled.type]: (state, action) => {
      state.entities.hiking = action.payload;
      state.loading = 'loaded';
    },
  },
});
