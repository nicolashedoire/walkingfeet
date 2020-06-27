import { combineReducers } from '@reduxjs/toolkit';
import Oauth from '../ducks/oauth';
import Cities from '../ducks/city';
import Hikings from '../ducks/hiking';

const rootReducer = combineReducers({
  oauth: Oauth.reducer,
  cities: Cities.reducer,
  hikings: Hikings.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
