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
import MicrosoftImage from "../../../assets/microsoft.svg";
import Image from "next/image";
import SendEmailModal from "../SendEmail";
import { SideBarStyles } from "./index.styles";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Sidebar = () => {
  const router = useRouter();
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
          width: "200px",
          // flexShrink: 0,
          margin: "0",
          "& .MuiDrawer-paper": drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ padding: "1rem 0 0 0.5rem" }}>
          <Button sx={addButton} onClick={() => signIn("google")}>
            <Image
              src={GoogleImage}
              height={20}
              width={20}
              alt="google image"
            />
            <Typography sx={addButtonText}>Add Google</Typography>
          </Button>
        </Box>
        <Box sx={{ padding: "1rem 0 1rem 0.5rem" }}>
          <Button
            sx={addButton}
            onClick={() => router.push("http://localhost:3000/login")}
          >
            <Image
              src={MicrosoftImage}
              height={20}
              width={20}
              alt="microsoft image"
            />
            <Typography sx={addButtonText}>Add Microsoft</Typography>
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
      {showNewEmailModal && (
        <SendEmailModal
          open={showNewEmailModal}
          handleClose={() => setShowNewEmailModal(false)}
          x
        />
      )}
    </>
  );
};

export default Sidebar;
