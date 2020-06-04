import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signup, signin, signinGoogle } from './api';
import { ISignUp, ISignIn, IgoogleProfile } from '../types';
import { setToken } from '../services/oauth';

//Thunk
export const signupAction = createAsyncThunk(
  'signup/POST',
  async (props: {
    email: string;
    password: string;
  }) => {
    const result = await signup(
      props.email,
      props.password,
    );
    return result.data;
  }
);

export const signinAction = createAsyncThunk(
  'signin/POST',
  async (props: {
    email: string;
    password: string;
  }) => {
    const result = await signin(
      props.email,
      props.password,
    );
    return result.data;
  }
);

export const signinGoogleAction = createAsyncThunk(
  'signinGoogle/POST',
  async (user: any) => {
    const data: IgoogleProfile = user.profileObj;
    const result = await signinGoogle(
      data.email,
      data.imageUrl,
      data.name,
      data.googleId
    );
    return result.data;
  }
);

type Entities = {
  signup: ISignUp;
  signin: ISignIn;
  signinGoogle: ISignIn;
  jwt: string | undefined;
};

interface State {
  entities: Entities;
  loading: 'idle' | 'loading' | 'failed' | 'forbidden' | 'loaded';
}

// InitialState
export const initialState: State = {
  entities: {
    signup: {
      message: undefined,
      code: undefined
    },
    signin: {
      message: undefined,
      code: undefined
    },
    signinGoogle: {
      message: undefined,
      code: undefined
    },
    jwt: undefined
  },
  loading: 'loading',
};

export const isLoading = (state: any): any =>
  state.projects.loading === 'loading' ? true : false;

export const getSignupStatus = (state: any): any =>
  state.oauth.entities.signup

export const getSigninStatus = (state: any): any =>
  state.oauth.entities.signin

export const getSigninGoogle = (state: any): any =>
  state.oauth.entities.signinGoogle

export const getJwt = (state: any): any =>
 state.oauth.entities.jwt

// Slice
export default createSlice({
  name: 'signup',
  initialState,
  reducers: {
    cleanSignUp: (state) => {
      state.entities.signup = {
        message: undefined,
        code: undefined
      }
    },
    cleanSignIn: (state) => {
      state.entities.signin = {
        message: undefined,
        code: undefined,
      }
    },
    cleanSignInGoogle: (state) => {
      state.entities.signinGoogle = {
        message: undefined,
        code: undefined,
      }
    },
  },
  extraReducers: {
    [signupAction.pending.type]: (state) => {
      state.loading = 'loading';
    },
    [signupAction.rejected.type]: (state, action) => {
      let informations: ISignUp = {
        message: undefined,
        code: undefined
      }
      if(action.error.message === 'Request failed with status code 403'){
        informations.message = 'Le compte existe déjà';
        informations.code = 403;
      }
      state.entities.signup = informations;
      state.loading = 'failed';
    },
    [signupAction.fulfilled.type]: (state, action) => {
      state.entities.signup = {
        message: 'Le compte a été créé',
        code: 200
      };
      state.loading = 'loaded';
    },
    [signinAction.pending.type]: (state) => {
      state.loading = 'loading';
    },
    [signinAction.rejected.type]: (state, action) => {
      let informations: ISignIn = {
        message: undefined,
        code: undefined
      }
      if(action.error.message === 'Request failed with status code 401'){
        informations.message = 'Accès non autorisé';
        informations.code = 401;
      }
      if(action.error.message === 'Request failed with status code 404'){
        informations.message = "L'utilisateur n'existe pas";
        informations.code = 404;
      }
      state.entities.signin = informations;
      state.loading = 'failed';
    },
    [signinAction.fulfilled.type]: (state, action) => {
      state.entities.signin = {
        message: 'Vous êtes connecté',
        code: 200
      };
      setToken(action.payload.token);
      state.entities.jwt = action.payload.token;
      state.loading = 'loaded';
    },
    [signinGoogleAction.pending.type]: (state) => {
      state.loading = 'loading';
    },
    [signinGoogleAction.rejected.type]: (state, action) => {
      let informations: ISignIn = {
        message: undefined,
        code: undefined
      }
      if(action.error.message === 'Request failed with status code 401'){
        informations.message = 'Accès non autorisé';
        informations.code = 401;
      }
      if(action.error.message === 'Request failed with status code 404'){
        informations.message = "L'utilisateur n'existe pas";
        informations.code = 404;
      }
      if(action.error.message === 'Request failed with status code 500'){
        informations.message = "Une erreur est survenue";
        informations.code = 500;
      }
      state.entities.signinGoogle = informations;
      state.loading = 'failed';
    },
    [signinGoogleAction.fulfilled.type]: (state, action) => {
      state.entities.signinGoogle = {
        message: 'Vous êtes connecté',
        code: 200
      };
      setToken(action.payload.token);
      state.entities.jwt = action.payload.token;
      state.loading = 'loaded';
    },
  },
});
