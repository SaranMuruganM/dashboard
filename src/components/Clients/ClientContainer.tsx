import ClientTable from "./ClientTable";
import ClientForm from "./ClientForm";
import { UserProvider } from "@/context/UserContext";

const ClientContainer = () => {

  return (
    <UserProvider>
        <ClientForm />
        <ClientTable />
    </UserProvider>
  );
};

export default ClientContainer;
