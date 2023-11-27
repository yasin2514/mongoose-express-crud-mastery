import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  // built-in ----static method----
  if (await UserModel.isUserExists(userData.userId)) {
    throw new Error('User is already exists!!!!');
  }
  const result = await UserModel.create(userData);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
