// app/page.tsx
"use client";
import { Box } from "@mui/material";
import ClientContainer from "@/components/Clients/ClientContainer";
export default function Home() {
  return (
    <Box component="main" className="space-y-6 mt-[100px] lg:mt-0">
      <h1 className="text-2xl ">Users Data : </h1>
      <ClientContainer/>
    </Box>
  );
}
