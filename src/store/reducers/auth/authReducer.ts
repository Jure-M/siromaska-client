import AuthActionTypes from '../../action-types/authActionTypes';
import AuthActions, { IUser } from '../../actions/authActions';

interface IAuthState {
  user: IUser | null;
  token: string | null;
  hasError: boolean;
  errorMessage: string;
  isLoading: boolean;
}

const initialState = {
  user: null,
  token: null,
  hasError: false,
  errorMessage: '',
  isLoading: true,
};

const authReducer = (state: IAuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        hasError: false,
      };
    case AuthActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        hasError: false,
        isLoading: false,
      };
    case AuthActionTypes.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      };
    case AuthActionTypes.CLEAR_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default authReducer;
