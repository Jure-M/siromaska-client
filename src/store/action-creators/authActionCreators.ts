import AuthActionTypes from '../action-types/authActionTypes';
import {
  Logout,
  SetCurrentUser,
  SetLoading,
  EndLoading,
  SetError,
  ClearError,
  IUser,
} from '../actions/authActions';

import { removeTokenFromLocalStorage } from '../../helpers/localStorage';

// TODO move remove token but where??
export const logout = (): Logout => {
  removeTokenFromLocalStorage();
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

export const setCurrentUser = (payload: {
  user: IUser;
  token: string;
}): SetCurrentUser => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload,
});

export const setLoading = (): SetLoading => ({
  type: AuthActionTypes.SET_LOADING,
});

export const endLoading = (): EndLoading => ({
  type: AuthActionTypes.END_LOADING,
});

export const setError = (message: string): SetError => ({
  type: AuthActionTypes.SET_ERROR,
  payload: message,
});

export const clearError = (): ClearError => ({
  type: AuthActionTypes.CLEAR_ERROR,
});
