import AuthActionTypes from '../action-types/authActionTypes';

export interface IUser {
  email: string;
  username: string;
}

export interface Logout {
  type: AuthActionTypes.LOGOUT;
}

export interface SetCurrentUser {
  type: AuthActionTypes.SET_CURRENT_USER;
  payload: { user: IUser; token: string };
}

export interface SetLoading {
  type: AuthActionTypes.SET_LOADING;
}

export interface EndLoading {
  type: AuthActionTypes.END_LOADING;
}

export interface SetError {
  type: AuthActionTypes.SET_ERROR;
  payload: string;
}

export interface ClearError {
  type: AuthActionTypes.CLEAR_ERROR;
}

type AuthActions =
  | Logout
  | SetCurrentUser
  | SetLoading
  | EndLoading
  | SetError
  | ClearError;

export default AuthActions;
