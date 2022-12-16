import {UserData} from './types';

declare module "iron-session" {
  interface IronSessionData {
    user?: UserData;
    csrfToken?: string;
  }
}
