import { combineReducers } from '@reduxjs/toolkit';
import Oauth from '../ducks/oauth';

const rootReducer = combineReducers({
  oauth: Oauth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
