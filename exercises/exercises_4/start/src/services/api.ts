import { ReturnUsers } from "../components/Users";

const makeGetUser = async (): Promise<ReturnUsers[]> => {
  const response = await fetch(`${process.env.REACT_APP_API}/users`, { method: 'GET' });
  return response.json();
}

export {
  makeGetUser,
};