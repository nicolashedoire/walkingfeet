import decode from 'jwt-decode';

interface Ijwt {
   user: {
      id: string;
   }
}

export const validateEmail = (email: string) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

export const validatePassword = (password: string) => {
   return password.length < 8 ? false : true;
}

export const setToken = (token: string) => {
   localStorage.setItem('JWT', token)
}

export const getToken = () => {
   return localStorage.getItem('JWT') || ''
}

export const removeToken = () => {
   localStorage.removeItem('JWT');
   window.location.href = '/';
}

export const jwtExist = () => {
   return localStorage.getItem('JWT') ? true : false;
}

export const getProfile = () => {
   const profile: Ijwt = decode(getToken());
   return profile;
}

export const getUserId = () => {
   const token: Ijwt = getProfile();
   return token.user.id;
}