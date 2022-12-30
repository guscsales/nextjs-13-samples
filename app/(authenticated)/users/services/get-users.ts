import { User } from '../models/user';

export async function getUsers(): Promise<User[]> {
  const response = await fetch('https://reqres.in/api/users');
  const users = await response.json();

  return users?.data || [];
}
