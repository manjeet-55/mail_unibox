import React from "react";
import {
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Inbox,
  Send,
  Drafts,
  Report,
  Delete,
  PaddingTwoTone,
} from "@mui/icons-material";
import GoogleImage from "../../../assets/google.png";
import Image from "next/image";

const Sidebar = () => {
  const drawerWidth = 200;

  const navItems = [
    { text: "Inbox", icon: <Inbox /> },
    { text: "Sent", icon: <Send /> },
    { text: "Drafts", icon: <Drafts /> },
    { text: "Spam", icon: <Report /> },
    { text: "Trash", icon: <Delete /> },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#f6f8fc",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Toolbar> */}
      <Box sx={{ padding: "1rem 0 1rem 0.5rem" }}>
        <Button
          sx={{
            background: "#c2e7fe",
            border: "none",
            padding: "0.75rem",
            borderRadius: "1rem",
            display: "flex",
            columnGap: "0.5rem",
            width: "11rem",
            transition: "0.3s ease-in-out",
            display:'flex',
            alignItems:'center',
            "&:hover": {
              background: "#c2e7fe",
              transform: "scale(1.025)",
            },
          }}
        >
          <Image src={GoogleImage} height={22} width={22} alt="google image" />
          <Typography sx={{ color: "#001d35" }}>Add Google</Typography>
        </Button>
      </Box>
      <Divider/>
      <List>
        {navItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Typography
              children={item.text}
              sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#001d35" }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
