import React from "react";
import { useQuery } from "react-query";
import { makeGetUser } from "../services/api";
import { ReturnUsers } from "./Users";
import { Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { User } from "./User";

function createData(name: any, surname: any) {
  return { name, surname };
}

const useStyles = makeStyles({
  table: {
    width: "200px",
  },
});
export function UserTable() {
  const query = useQuery<ReturnUsers[]>("users", makeGetUser);
  const usersData = query.data
    ? query.data.map((e) => createData(e.name, e.surname))
    : [];
  const rows = usersData;
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <User usersData={usersData} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
