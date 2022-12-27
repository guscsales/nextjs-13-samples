import { getUserById } from '../services/get-user-by-id';

export default async function UserDetailsHead({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUserById(params.userId);
  const title = `${user.first_name} - Usuários - Sistema Olá Mundo`;

  return (
    <>
      <title>{title}</title>
    </>
  );
}
