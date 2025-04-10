import { Box, TextField, Button, Autocomplete, Tooltip } from "@mui/material";
import ClientFormPanel from "./ClientFormPanel";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";

const ClientForm = () => {
  const {
    showForm,
    setShowForm,
    setSearchTerm,
    searchTerm,
    handleAssignUser,
    selectedRows,
    handleStatus,
  } = useUserContext();

  const users = ["None", "Ben", "Alex", "Martin"];
  const status = ["None", "Pending", "Ongoing", "Completed"];
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <>
      <Box className="flex items-center justify-between gap-6 flex-wrap">
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Enter a Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              width: {
                xs: "100%",
                sm: "300px",
                md: "400px",
              },
              "& label.Mui-focused": {
                color: "primary.main",
              },
            }}
          />

          <Button
            variant="outlined"
            color="error"
            sx={{
              height: "40px",
              textTransform: "none",
              display: "block",
            }}
            disabled={!searchTerm}
            onClick={() => setSearchTerm("")}
          >
            Clear
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Tooltip
            title={
              selectedRows.length === 0
                ? "Select a row first"
                : "Select a person to assign"
            }
            placement="top"
          >
            <Autocomplete
              disablePortal
              options={users}
              size="small"
              value={selectedUser}
              sx={{ width: "150px" }}
              onChange={(e, value) => {
                if (value) handleAssignUser(value);
                setSelectedUser(null);
              }}
              renderInput={(params) => <TextField {...params} label="Users" />}
              disabled={selectedRows.length === 0}
            />
          </Tooltip>

          <Tooltip
            title={
              selectedRows.length === 0
                ? "Select a row first"
                : "Select a status"
            }
            placement="top"
          >
            <Autocomplete
              disablePortal
              options={status}
              size="small"
              sx={{
                width: "150px",
              }}
              value={selectedStatus}
              onChange={(e, value) => {
                if (value) handleStatus(value);
                setSelectedStatus(null);
              }}
              renderInput={(params) => <TextField {...params} label="Status" />}
              disabled={selectedRows.length === 0}
            />
          </Tooltip>

          <Button
            className="border px-4 py-2 rounded border-green-600 text-green-600 cursor-pointer "
            onClick={() => setShowForm(!showForm)}
            sx={{
              color: "primary.main",
              borderColor:"primary.main",
              textTransform: "none",
              whiteSpace: "nowrap",
              
            }}
            variant="outlined"
          >
            Add User
          </Button>
        </Box>
      </Box>
      <ClientFormPanel />
    </>
  );
};

export default ClientForm;
