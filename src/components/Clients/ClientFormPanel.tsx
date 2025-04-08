import { Drawer, Box, TextField, Button } from "@mui/material";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";

const ClientFormPanel = () => {
  const { showForm, setShowForm, handleAddingUser } = useUserContext();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  return (
    <Drawer anchor="right" open={showForm} onClose={() => setShowForm(false)}>
      <Box sx={{ width: 300, padding: 3 }}>
        <TextField
          label="First Name"
          fullWidth
          margin="normal"
          value={newUser.firstName}
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
        />
        <TextField
          label="Last Name"
          fullWidth
          margin="normal"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <TextField
          label="Age"
          type="number"
          fullWidth
          margin="normal"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2,backgroundColor:'black'}}
          onClick={() => handleAddingUser(newUser)}
        >
          Submit
        </Button>
      </Box>
    </Drawer>
  );
};

export default ClientFormPanel;
