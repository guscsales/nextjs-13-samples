export async function getUserById(userId: string) {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const user = await response.json();

  return user?.data;
}
