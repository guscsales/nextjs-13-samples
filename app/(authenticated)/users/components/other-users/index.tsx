'use client';

import Link from 'next/link';
import React from 'react';
import { User } from '../../models/user';
import { getUsers } from '../../services/get-users';

type Props = {
  currentUserId: string;
};

export default function OtherUsers({ currentUserId }: Props) {
  const [otherUsers, setOtherUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    (async () => {
      const users = await getUsers();

      setOtherUsers(
        users.filter((user) => user.id !== parseInt(currentUserId))
      );
    })();
  }, [currentUserId, setOtherUsers]);

  if (otherUsers.length === 0) {
    return <>Carregando...</>;
  }

  return (
    <ul>
      {otherUsers.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            {user.first_name} {user.last_name} ({user.email})
          </Link>
        </li>
      ))}
    </ul>
  );
}
