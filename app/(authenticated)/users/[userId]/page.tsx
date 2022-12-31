import OtherUsers from '../components/other-users';
import { getUserById } from '../services/get-user-by-id';
import { getUsers } from '../services/get-users';

export async function generateStaticParams() {
  const users = await getUsers();
  const usersIds = users.map((user) => ({ userId: user.id.toString() }));

  return usersIds;
}

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
      {user.body}
      <hr />
      <h2>Outros Usuários</h2>
      <OtherUsers currentUserId={params.userId} />
    </>
  );
}
