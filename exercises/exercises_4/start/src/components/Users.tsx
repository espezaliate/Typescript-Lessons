import React from "react";
import { Grid } from "@material-ui/core";
import { UserTable } from "./UserTable";

export interface ReturnUsers {
  name: string;
  surname: string;
}

const Users = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <UserTable />
      </Grid>
    </Grid>
  );
};

export default Users;
