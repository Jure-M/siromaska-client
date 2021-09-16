import axios, { AxiosResponse } from 'axios';

export const fetchNameChange = (username: string, token: string) =>
  axios.patch<
    { status: string; message: string },
    AxiosResponse<{ status: string; message: string }>
  >(
    'http://localhost:5000/api/v1/user/me',
    {
      username,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  );

export const fetchPasswordChange = (
  password: string,
  passwordConfirm: string,
  token: string,
) =>
  axios.patch<
    { status: string; message: string },
    AxiosResponse<{ status: string; message: string }>
  >(
    'http://localhost:5000/api/v1/user/updatePassword',
    {
      password,
      passwordConfirm,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  );

export default { fetchNameChange, fetchPasswordChange };
