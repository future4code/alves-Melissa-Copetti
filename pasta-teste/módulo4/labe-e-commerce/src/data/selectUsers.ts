import { UserData } from "../types";
import { connection } from "./connection";

const typeUser = (user: any) => {
  const createUser: UserData = {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  };
};

export default async function selectUsers(): Promise<UserData[] | undefined> {
  const result = await connection("labecomerce_users");

  const allUserType = result.map((user) => {
    return typeUser(user);
  });
  return result;
}
