import { User } from '../models/user';

export async function getUserById(userId: string): Promise<User> {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const user = await response.json();

  const responseContent = await fetch(
    'https://www.tabnews.com.br/api/v1/contents/guscsales/montei-um-blog-com-as-apis-do-tabnews',
    { next: { revalidate: 10 } }
  );
  const { body } = await responseContent.json();

  return { ...user?.data, body };
}
