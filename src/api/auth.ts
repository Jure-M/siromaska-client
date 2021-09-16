import axios, { AxiosResponse } from 'axios';
import { IUser } from '../store/actions/authActions';

export const signup = (
  username: string,
  email: string,
  password: string,
  passwordConfirm: string,
) =>
  axios.post<{ status: string }, AxiosResponse<{ status: string }>>(
    'http://localhost:5000/api/v1/signup',
    {
      username,
      email,
      password,
      passwordConfirm,
    },
  );

export const login = async (email: string, password: string) =>
  await axios.post<
    { token: string; user: IUser },
    AxiosResponse<{ token: string; user: IUser }>
  >('http://localhost:5000/api/v1/login', {
    email,
    password,
  });

export const isLogedIn = async (token: string) =>
  axios.post<
    { token: string; user: IUser },
    AxiosResponse<{ token: string; user: IUser }>
  >(
    'http://localhost:5000/api/v1/islogedin',
    {},
    { headers: { Authorization: `Bearer ${token}` } },
  );
export const activateAccount = async (token: string) =>
  axios.post<{ status: string }, AxiosResponse<{ status: string }>>(
    `http://localhost:5000/api/v1/activationToken/${token}`,
  );

export default { signup, login, isLogedIn, activateAccount };
