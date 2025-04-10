import { useState, useMemo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, TextField } from "@mui/material";
import { useUserContext } from "@/context/UserContext";
import { ThinCheckboxChecked,ThinCheckboxIndeterminate,ThinCheckboxUnchecked } from "../CheckBox";
const ClientTable = () => {

  const { users, columnsBase, handleDelete,searchTerm,setSelectedRows,rowSelectionModel,setRowSelectionModel} = useUserContext();

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

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return (
    <Box className="space-y-4">
      <DataGrid
        rows={filteredUsers}
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
        checkboxSelection
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={(ids) => {
          setSelectedRows([...ids]);
          setRowSelectionModel([...ids]);
        }}
        slotProps={{
          baseCheckbox: {
            icon: <ThinCheckboxUnchecked />,
            checkedIcon: <ThinCheckboxChecked />,
            indeterminateIcon: <ThinCheckboxIndeterminate />,
            disableRipple: true,  
          },
        }}
        sx={{
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none", 
          },
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
        }}
      />
    </Box>
  );
};

export default ClientTable;
