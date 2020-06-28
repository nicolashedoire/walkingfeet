import axios from '../config/axios';

// const params = {
//     api_key: process.env.REACT_APP_API_KEY,
// };

export const getCitiesApi = (
  name : string
) => {
  return axios.get(
    `/cities?name=${name}`
  )
}

export const getHikingsApi = async (city : string, country: string, difficulty: string) => {
  return await axios.get(
    `/hikings?city=${city}&country=${country}&difficulty=${difficulty}`
  );
}

export const getHikingByIdApi = async (id: string) => {
  return await axios.get(
    `/hikings/${id}`
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