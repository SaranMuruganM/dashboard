"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import usersData from "@/utils/users";
import Collapse from "@mui/material/Collapse";


const columnsBase: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

export default function DataTable() {
  const [users, setUsers] = useState(usersData);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("data");
    if (!stored) {
      localStorage.setItem("data", JSON.stringify(usersData));
    } else {
      setUsers(JSON.parse(stored));
    }
  }, []);

  const handleAddingUser = () => {
    if (!(newUser.firstName || !newUser.lastName) || !newUser.age) return;

    const updatedUsers = [
      ...users,
      {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        ...newUser,
        age: parseInt(newUser.age),
      },
    ];
    setUsers(updatedUsers);
    localStorage.setItem("data", JSON.stringify(updatedUsers));
    setNewUser({ firstName: "", lastName: "", age: "" });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
    localStorage.setItem("data", JSON.stringify(filtered));
  };

  const columns: GridColDef[] = [
    ...columnsBase,
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <button
          className="text-red-500 border border-red-500 rounded px-2 py-1 text-sm cursor-pointer"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400}} className="space-y-4 w-[100w] lg:w-full">
      <Box className="space-x-2 ">
        <button
          className={`border px-4 py-2 rounded ml-auto ${
            showForm
              ? "border-red-600 text-red-600"
              : "border-green-600 text-green-600"
          } cursor-pointer`}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add User"}
        </button>
      </Box>

      <Collapse in={showForm}>
        <div className="space-x-2 mt-2 space-y-2">
          <input
            placeholder="First name"
            className="border p-2 rounded"
            value={newUser.firstName}
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
          />
          <input
            placeholder="Last name"
            className="border p-2 rounded"
            value={newUser.lastName}
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
          />
          <input
            placeholder="Age"
            type="number"
            className="border p-2 rounded"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
          />
          <button
            className="bg-black text-white px-4 py-2 rounded lg:inline block"
            onClick={handleAddingUser}
          >
            Submit
          </button>
        </div>
      </Collapse>

      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        hideFooterSelectedRowCount
      />
    </Box>
  );
}
