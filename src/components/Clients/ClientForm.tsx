import { Box } from "@mui/material";
import ClientFormPanel from "./ClientFormPanel";
import { useUserContext } from "@/context/UserContext";

const ClientForm = () => {
  const { showForm, setShowForm, users } = useUserContext();

  return (
    <>
      <Box sx={{ height: 400 }} className="space-y-4 w-[100vw] lg:w-full max-h-fit">
        <Box className="space-x-2">
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
      </Box>
      <ClientFormPanel/>
    </>
  );
};

export default ClientForm;
