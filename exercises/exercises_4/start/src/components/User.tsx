import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { ReturnUsers } from "./Users";

interface Props {
  usersData: ReturnUsers[];
}

export const User = ({ usersData }: Props) => {
  const rows = usersData;
  return (
    <>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.surname}</TableCell>
        </TableRow>
      ))}
    </>
  );
};
