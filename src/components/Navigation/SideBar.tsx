"use client";
import { Box, List, ListItemButton, ListItemText, Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useThemeContext } from "../../context/ThemeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const links = [
  { label: "Dashboard", href: "/" },
  { label: "Reports", href: "/reports" },
  { label: "About", href: "/about" },
];

export default function Sidebar() {
  const router = useRouter();
  const { mode, toggleTheme } = useThemeContext();

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        p: 2,
        position: "fixed ",
      }}
      className="hidden lg:block"
    >
      <IconButton
        onClick={toggleTheme}
        color="inherit"
      >
        {mode === "dark" ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>

      <List>
        {links.map((link) => (
          <ListItemButton
            sx={{
              color: "white",
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
