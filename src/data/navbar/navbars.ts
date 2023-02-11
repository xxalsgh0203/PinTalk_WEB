enum NavbarTitle {
  LOGIN = "로그인",
  ACCOUNT = "계좌",
  TRANSFER = "이체",
  ADMIN = "관리자",
}

export interface NavItem {
  title?: NavbarTitle;
  category?: "main" | "admin" | "account";
  id?: string;
}

export const navbarsMain: NavItem[] = [
  {
    title: NavbarTitle.LOGIN,
    category: "admin",
    id: "login",
  },
  {
    title: NavbarTitle.ADMIN,
    category: "main",
    id: "admin",
  },
];

export const navbarsAdmin: NavItem[] = [
  {
    title: NavbarTitle.ACCOUNT,
    category: "admin",
    id: "account",
  },
  {
    title: NavbarTitle.TRANSFER,
    category: "admin",
    id: "transferList",
  },
];

export const navbarsAccount: NavItem[] = [
  {
    title: NavbarTitle.ACCOUNT,
    category: "account",
    id: "account",
  },
];
