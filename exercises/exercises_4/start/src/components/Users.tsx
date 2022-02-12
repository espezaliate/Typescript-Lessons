import React from "react";
import { Paper, Grid, Box } from '@material-ui/core';
import { useQuery } from 'react-query';
import { User } from '../types';
import { makeGetUser } from '../services/api';
import UserComponent from './User';

const Users = () => {
  const query = useQuery<User[]>('users', makeGetUser);

  if (query.isLoading) return (
    <div>Trwa ładowanie użytkowników</div>
  );

  if (query.error) return (
    <div>Nie udało się załadować użytkowników</div>
  )

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box margin={2}>
          <Paper>
            { query.data?.map((user) => (
              <UserComponent
                name={user.name}
                surname={user.surname}
                email="test@test.pl"
              />
            ))}
        </Paper>
        </Box>
      </Grid>
    </Grid>
  )
};

export default Users;