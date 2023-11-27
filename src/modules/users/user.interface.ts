import { Model } from 'mongoose';

// ------------------------sub interface----------------------------
export type TGenericArray<T> = Array<T>;

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TOrders = {
  productName: string;
  price: number;
  quantity: number;
};

// ----------------------main interface-----------------------
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: TGenericArray<string>;
  address: TAddress;
  orders?: TGenericArray<TOrders>;
};

// create custom static method---------
export interface TUserModel extends Model<TUser> {
  isUserExists(userId: number): Promise<TUser | null>;
}
