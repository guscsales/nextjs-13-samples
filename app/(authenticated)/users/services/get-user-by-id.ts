import { User } from '../models/user';

export async function getUserById(userId: string): Promise<User> {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const user = await response.json();

  return user?.data;
}
