export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthResponse = {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
};

export type StoreAuthData = {
  name: string;
  userId: string;
  token: string;
  refreshToken: string;
};

export type userRegData = {
  name: string;
  email: string;
  password: string;
};
