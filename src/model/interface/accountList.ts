import { PageInfo } from "./common";

export interface AccountType {
  "1": "수시입출금";
  "2": "예적금";
  "6": "수익증권";
  T: "종합계좌";
}

export interface AccountState {
  "01": "사용";
  "09": "해지";
}

type AgreeState = "Y" | "N";

export interface AccountInfo {
  userMember?: number;
  finTechUseNum?: string;
  accountAlias?: string;
  bankCodeStd?: string;
  bankCodeSub?: string;
  bankName?: string;
  savingsBankName?: string;
  holderName?: string;
  accountBalance?: string;
  holderType?: string;
  accountType?: keyof AccountType;
  accountNo?: string;
  inquiryAgreeYn?: AgreeState;
  inquiryAgreeDt?: Date;
  transferAgree_yn?: AgreeState;
  transferAgreeDt?: Date;
  state?: keyof AccountState;
  createDt?: Date;
  modifyDt?: Date;
  no?: number;
  reg_Date: Date;
  update_Date: Date;
}

export type AccountListPayload = [AccountInfo[], PageInfo];

export interface AccountListInitialState {
  payload?: AccountListPayload;
  submitData?: any;
  loading: boolean;
  error?: string;
  page: number;
}
