import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';

export const reducers = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof reducers>;
