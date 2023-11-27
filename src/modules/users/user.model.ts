import { Schema, model } from 'mongoose';
import { TUser, TUserModel } from './user.interface';
// sub schemas
const userNameSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is Required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is Required'],
  },
});

const addressSchema = new Schema({
  street: {
    type: String,
    required: [true, 'Street is Required'],
  },
  city: {
    type: String,
    required: [true, 'City is Required'],
  },
  country: {
    type: String,
    required: [true, 'Country is Required'],
  },
});

const ordersSchema = new Schema({
  productName: {
    type: String,
    required: [true, 'Product Name is Required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is Required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is Required'],
  },
});

// main schema
const userSchema = new Schema<TUser, TUserModel>({
  userId: {
    type: Number,
    required: [true, 'User Id is Required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'User Name is Required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
  },
  fullName: userNameSchema,
  age: {
    type: Number,
    required: [true, 'Age is Required'],
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'is Active is Required'],
    default: true,
  },
  hobbies: [String],
  address: addressSchema,
  orders: [ordersSchema],
});

// create model--------------------
export const UserModel = model<TUser, TUserModel>('User', userSchema);
