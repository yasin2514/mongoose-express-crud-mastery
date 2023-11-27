import { z } from 'zod';

// Define sub-schemas
const UserNameSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const AddressSchemaValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const OrdersSchemaValidation = z.object({
  productName: z.string(),
  price: z.number().positive('Price must be greater than 0'),
  quantity: z.number().positive('Quantity must be greater than 0'),
});

// Define main schema
export const UserSchemaValidation = z.object({
  userId: z.number().positive('User Id must be greater than 0'),
  username: z.string(),
  password: z
    .string()
    .max(20, 'Password should be maximum 20 character')
    .min(6, 'Password should be is Minimum 6 character'),
  fullName: UserNameSchemaValidation,
  age: z.number().positive('Age must be greater than 0'),
  email: z.string().email('Invalid email format'),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: AddressSchemaValidation,
  orders: z.array(OrdersSchemaValidation).optional(),
  isDeleted: z.boolean().default(false),
});
