import { combineReducers } from '@reduxjs/toolkit';
import Oauth from '../ducks/oauth';
import Cities from '../ducks/city';

const rootReducer = combineReducers({
  oauth: Oauth.reducer,
  cities: Cities.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
