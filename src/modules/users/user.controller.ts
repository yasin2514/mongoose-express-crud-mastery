import { Request, Response } from 'express';
import { UserSchemaValidation } from './user.zod.validation';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const zodParseData = UserSchemaValidation.parse(userData);
    const result = await UserServices.createUserIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'User is created successfully!!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something Went to Wrong',
      error: {
        code: 500,
        description: error.message,
      },
    });
  }
};

// ger all users from db
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something Went to Wrong',
      error: {
        code: 500,
        description: error.message,
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
};
