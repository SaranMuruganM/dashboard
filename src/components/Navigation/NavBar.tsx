"use client";

import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Reports", href: "/reports" },
  { label: "About", href: "/about" },
];

export default function NavBar() {
  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <Box
      sx={{
        height: "120",
        backgroundColor: "black",
        color: "white",
        p: 2,
      }}
      className="lg:hidden fixed left-0 right-0 top-0"
    >
      <List className="flex justify-end">
        {links.map((link) => (
          <ListItemButton
            sx={{
              color: "white",
              flexGrow:0,
              "&.Mui-selected": {
                backgroundColor: "#333",
              },
            }}
            onClick={() => handleClick(link.href)}
            key={link.href}
          >
            <ListItemText primary={link.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
