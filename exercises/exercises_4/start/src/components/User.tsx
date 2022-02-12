import React from 'react';
import { User } from '../types';

interface Props extends User {
  email: string,
}

const UserComponent = ({ name, surname, email }: Props ) => {
  return (
    <div>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{email}</p>
    </div>
  );
}

export default UserComponent;