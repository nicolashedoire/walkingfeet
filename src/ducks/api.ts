import axios from '../config/axios';

// const params = {
//     api_key: process.env.REACT_APP_API_KEY,
// };

export const getCitiesApi = async (
  name : string
) => {
  return await axios.get(
    `/cities?name=${name}`
  );
}

export const signup = async (
    email: string,
    password: string,
  ) => {
    return await axios.post(
      `/signup`,
      {
        email,
        password
      }
    );
  };

  export const signin = async (
    email: string,
    password: string,
  ) => {
    return await axios.post(
      `/signin`,
      {
        email,
        password
      }
    );
  };

  export const signinGoogle = async (
    email: string,
    picture: string,
    pseudo: string,
    googleId: string
  ) => {
    return await axios.post(
      `/oauth/google`,
      {
        email,
        picture,
        pseudo,
        googleId
      }
    );
  };