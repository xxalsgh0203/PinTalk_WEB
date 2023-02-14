import { PageInfo } from "./common";

export interface CodeEmail {
  codeGroup: string;
  codeName: string;
  codeUser: string;
  codeValue: string;
  no: number;
  reg_Date: Date;
  update_Date: Date;
}

export interface UserInfo {
  accounts?: any;
  address?: string;
  address1?: string;
  address2?: string;
  email?: string;
  gender?: string;
  id?: string;
  job_key?: string;
  modifyDate?: Date;
  name?: string;
  no?: number;
  password?: string;
  phone1?: string;
  phone2?: string;
  phone3?: string;
  reg_Date?: Date;
  resCnt?: string;
  saveStatus?: string;
  signDate?: string;
  ssn?: string;
  ssn1?: string;
  ssn2?: string;
  update_Date?: Date;
  admin_yn: "N";
}

export interface UserFilteringData {
  address?: string | null;
  year?: string | null;
  month?: string | null;
  day?: string | null;
  gender?: string | null;
  name?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  phone3?: string | null;
  signDateStart?: string | null;
  signDateEnd?: string | null;
  modifyDateStart?: string | null;
  modifyDateEnd?: string | null;
  email?: string | null;
  saveStatus?: string | null;
  frontEmail?: string | null;
  backEmail?: string | null;
}

export interface UserSubmitData {
  email?: string;
  address1?: string;
  address2?: string;
  gender: string;
  id: string;
  job_key?: string;
  job?: string;
  name: string;
  password: string;
  phone1?: string;
  phone2?: string;
  phone3?: string;
  ssn?: string;
  ssn1: string;
  ssn2: string;
  frontEmail?: string;
  backEmail?: string;
  saveStatus?: string;
  resCnt?: number;
  error?: {
    message: string;
  };
  [key: string]: any;
}

export type UserListPayload = [CodeEmail[], UserInfo[], PageInfo];

export interface UserListInitialState {
  payload?: UserListPayload;
  submitData?: UserFilteringData;
  loading: boolean;
  error?: string;
  page: number;
}
