import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

function Users() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList([
      {
        first_name: "john",
        last_name: "brown",
        email: "john@email.com",
        creation_date: "11.11.2021",
      },
      {
        first_name: "william",
        last_name: "johnson",
        email: "william@email.com",
        creation_date: "11.11.2022",
      },
      {
        first_name: "mary",
        last_name: "lopez",
        email: "mary@email.com",
        creation_date: "09.05.2022",
      },
    ]);
  }, []);

  const columns = [
    {
      field: "first_name",
      headerName: "first name",
      width: 100,
    },
    {
      field: "last_name",
      headerName: "last name",
    },
    {
      field: "email",
      headerName: "email",
      width: 250,
    },
    {
      field: "creation_date",
      headerName: "Creation Date",
      width: 250,
    },
  ];

  return (
    <DataGrid
      rows={userList}
      columns={columns}
      getRowId={(row) => row.email}
      // onCellClick={handleOnCellClick}
    />
  );
}

export default Users;
