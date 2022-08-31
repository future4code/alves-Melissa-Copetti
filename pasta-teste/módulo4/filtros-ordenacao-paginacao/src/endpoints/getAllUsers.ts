import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers();
    let name = req.query.name as string;

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    if (!name) {
      name = "%";
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
