import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Reply, Forward, Delete } from "@mui/icons-material";
import { EmailDetailViewStyles as styles } from "./index.styles"; // Import the styles

const EmailDetailView = ({ email }) => {
    console.log("email", email)
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Box sx={styles.senderInfo}>
          <Typography sx={styles.senderName}>
            {email.sender.emailAddress.name}
          </Typography>
          <Typography sx={styles.senderEmail}>
            {`<${email.sender.emailAddress.address}>`}
          </Typography>
        </Box>
        <Typography sx={styles.subject}>{email.subject}</Typography>
      </Box>
      <Typography sx={styles.body}>{email.body.content}</Typography>
      <Box sx={styles.actions}>
        <Box>
          <Button
            startIcon={<Reply />}
            sx={styles.actionButton}
            variant="outlined"
            size="small"
          >
            Reply
          </Button>
          <Button
            startIcon={<Forward />}
            sx={styles.actionButton}
            variant="outlined"
            size="small"
          >
            Forward
          </Button>
        </Box>
        <IconButton color="error">
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EmailDetailView;
