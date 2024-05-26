import React, { useState } from "react";
import {
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";
import {
  Inbox,
  Send,
  Drafts,
  Report,
  Delete,
  ModeEditOutline,
} from "@mui/icons-material";
import GoogleImage from "../../../assets/google.png";
import Image from "next/image";
import SendEmailModal from "../SendEmail";
import { SideBarStyles } from "./index.styles";

const Sidebar = () => {
  const [showNewEmailModal, setShowNewEmailModal] = useState(false);
  const navItems = [
    { text: "Inbox", icon: <Inbox /> },
    { text: "Sent", icon: <Send /> },
    { text: "Drafts", icon: <Drafts /> },
    { text: "Spam", icon: <Report /> },
    { text: "Trash", icon: <Delete /> },
  ];

  const {
    drawerPaper,
    addButton,
    addButtonText,
    composeButton,
    composeButtonText,
    composeIcon,
    navItemText,
  } = SideBarStyles;

  return (
    <>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ padding: "1rem 0 1rem 0.5rem" }}>
          <Button sx={addButton}>
            <Image
              src={GoogleImage}
              height={22}
              width={22}
              alt="google image"
            />
            <Typography sx={addButtonText}>Add Google</Typography>
          </Button>
        </Box>
        <Divider />
        <Box sx={{ padding: "1rem 0 0 0.5rem" }}>
          <Button
            sx={composeButton}
            onClick={() => {
              setShowNewEmailModal(true);
            }}
          >
            <ModeEditOutline sx={composeIcon} />
            <Typography sx={composeButtonText}>Compose</Typography>
          </Button>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography sx={navItemText}>{item.text}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <SendEmailModal
        open={showNewEmailModal}
        handleClose={() => setShowNewEmailModal(false)}
      />
    </>
  );
};

export default Sidebar;
