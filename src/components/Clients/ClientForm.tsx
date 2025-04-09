import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import ClientFormPanel from "./ClientFormPanel";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";

const ClientForm = () => {
  const { showForm, setShowForm, setSearchTerm, searchTerm } = useUserContext();
  const [userRole, setUserRole] = useState("viewer");

  const handleRoleChange = (event: any) => {
    setUserRole(event.target.value);
  };

  return (
    <>
        <Box className="flex items-center justify-between gap-6" >
          {/* Search Bar */}
          <Box>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: 300 }}
            />

            <Button
              variant="outlined"
              color="error"
              sx={{
                height: "40px",
                textTransform: "none",
                marginLeft: "20px",
              }}
              onClick={() => setSearchTerm("")}
            >
              Cancel
            </Button>
          </Box>


          <Box sx={{display:"flex",gap:"20px"}}>
            
            <FormControl sx={{ minWidth: 160 }} size="small">
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                value={userRole}
                label="Role"
                onChange={handleRoleChange}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="viewer">Viewer</MenuItem>
              </Select>
            </FormControl>

            <Button
              className="border px-4 py-2 rounded border-green-600 text-green-600 cursor-pointer"
              onClick={() => setShowForm(!showForm)}
              sx={{
                color: "green",
                borderColor: "darkgreen",
                textTransform:"none"
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
