export {};
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../api/auth';

// type AuthDetails = {
//   user: {
//     username: string;
//     email: string;
//   };
//   token: string;
// };

// export const useAuthActions = (username: string, password: string) => {
//   const [isloading, setIsLoading] = useState(false);
//   const [authDetails, setAuthDetails] = useState<AuthDetails | null>(null);

//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     setIsLoading(true);
//     const fetchData = async () => {
//       try {
//         const res = await login(username, password);
//         setAuthDetails({
//           user: res.data.user,
//           token: res.data.token,
//         });
//       } catch (err: any) {
//         setErrorMessage(err.response.data.message);
//         setIsLoading(true);
//       }
//     };
//     fetchData();
//   }, []);

//   return { isloading, authDetails, errorMessage };
// };
