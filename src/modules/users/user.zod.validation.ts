import { z } from 'zod';

// Define sub-schemas
const UserNameSchema = z.object({
  firstName: z.string().nonempty('First Name is Required'),
  lastName: z.string().nonempty('Last Name is Required'),
});

const AddressSchema = z.object({
  street: z.string().nonempty('Street is Required'),
  city: z.string().nonempty('City is Required'),
  country: z.string().nonempty('Country is Required'),
});

const OrdersSchema = z.object({
  productName: z.string().nonempty('Product Name is Required'),
  price: z.number().positive('Price must be greater than 0'),
  quantity: z.number().positive('Quantity must be greater than 0'),
});

// Define main schema
export const UserSchema = z.object({
  userId: z.number().positive('User Id must be greater than 0'),
  username: z.string(),
  password: z.string().max(20, 'Password Is Smaller than 20 character'),
  fullName: UserNameSchema,
  age: z.number().positive('Age must be greater than 0'),
  email: z.string().email('Invalid email format'),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: AddressSchema,
  orders: z.array(OrdersSchema),
});
