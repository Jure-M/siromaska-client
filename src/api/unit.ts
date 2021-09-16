import axios, { AxiosResponse } from 'axios';

export interface IUnit {
  _id: string;
  name: string;
}

export const fetchCreateUnit = (name: string, token: string) =>
  axios.post<
    { status: string; message: string; units: IUnit[] },
    AxiosResponse<{ status: string; message: string; unit: IUnit }>
  >(
    'http://localhost:5000/api/v1/units',
    { name },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

export const fetchEditUnit = (name: string, id: string, token: string) =>
  axios.patch<
    { status: string; message: string; unit: IUnit },
    AxiosResponse<{ status: string; message: string; unit: IUnit }>
  >(
    `http://localhost:5000/api/v1/units/${id}`,
    { name },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

export const fetchDeleteUnit = (id: string, token: string) =>
  axios.delete<
    { status: string; message: string },
    AxiosResponse<{ status: string; message: string }>
  >(`http://localhost:5000/api/v1/units/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const fetchAllUnits = (token: string) =>
  axios.get<
    { status: string; units: IUnit[] },
    AxiosResponse<{ status: string; units: IUnit[] }>
  >('http://localhost:5000/api/v1/units', {
    headers: { Authorization: `Bearer ${token}` },
  });

export default {
  fetchAllUnits,
  fetchCreateUnit,
  fetchEditUnit,
  fetchDeleteUnit,
};
