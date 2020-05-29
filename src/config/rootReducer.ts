import { combineReducers } from '@reduxjs/toolkit';
// import Hikings from '../ducks/hikings';

const rootReducer = combineReducers({
  // hikings: Hikings.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
