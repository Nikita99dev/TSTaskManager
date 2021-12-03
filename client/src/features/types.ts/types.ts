import { logUserInteface, userInteface } from "../../app/types/userTypes";

export interface IRegAction{
  type: string,
  payload: {
    values: userInteface,
    navigate: (a:any, b: any )=> void
  }
}

export interface ILogAction{
  type: string,
  payload:{
  values :logUserInteface,
  navigate: (a:any, b:any)=> void
}
}
