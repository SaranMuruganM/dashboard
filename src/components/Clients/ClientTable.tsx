import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useUserContext } from "@/context/UserContext";

const ClientTable = () => {
  const { users, columnsBase, handleDelete } = useUserContext();

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
  );
};

export default ClientTable;
