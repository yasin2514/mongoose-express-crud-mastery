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

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

//get single student data---------
const getSingleUserFromDB = async (userId: number) => {
  // using aggregation-------
  const result = await UserModel.aggregate([{ $match: { userId: userId } }]);
  return result;
};

// delete student from DB----
const deleteUserFromDB = async (userId: number) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
};
