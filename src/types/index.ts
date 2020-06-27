export interface ISignUp {
    message: string | undefined;
    code: number | undefined;
 }

 export interface ISignIn {
    message: string | undefined;
    code: number | undefined;
 }

 export interface Ioauth {
   email: string | undefined;
   password: string | undefined;
}

export interface IgoogleProfile {
   email: string;
   familyName: string | undefined;
   givenName: string | undefined;
   googleId: string;
   imageUrl: string;
   name: string;
}

export interface Icity {
   _id: string;
   name: string;
   country: string;
}