import { User }from '../types';

const makeGetUser = async (): Promise<User[]> => {
  const response = await fetch(`${process.env.REACT_APP_API}/users`, { method: 'GET' });
  return response.json();
}

export {
  makeGetUser,
};