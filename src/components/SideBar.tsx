"use client";

import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Reports", href: "/reports" },
  { label: "About", href: "/about" },
];

export default function Sidebar() {
  const router = useRouter();

  const handleClick = (href:string)=>{
      router.push(href);
  }

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        p: 2,
      }}
    >
      <List>
        {links.map((link) => (
            <ListItemButton
              sx={{
                color: "white",
                "&.Mui-selected": {
                  backgroundColor: "#333",
                },
              }}
              onClick={()=>handleClick(link.href)}
              key={link.href}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
       
        ))}
      </List>
    </Box>
  );
}
