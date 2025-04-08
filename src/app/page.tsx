// app/page.tsx
"use client";
import { Box } from "@mui/material";
import DataTable from "@/components/DataGrid";

export default function Home() {
  return (
      <Box component="main" sx={{ flexGrow: 1}} className="space-y-6">
        <h1 className="text-2xl ">Users Data : </h1>
        <DataTable />
      </Box>
  );
}
