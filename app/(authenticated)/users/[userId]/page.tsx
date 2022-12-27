import OtherUsers from '../components/other-users';
import { getUserById } from '../services/get-user-by-id';

export default async function UserDetailsPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUserById(params.userId);

  return (
    <>
      <h2>
        Usuário: {user.first_name} {user.last_name}
      </h2>
      <span>{user.email}</span>
      <hr />
      <h2>Outros Usuários</h2>
      <OtherUsers currentUserId={params.userId} />
    </>
  );
}
