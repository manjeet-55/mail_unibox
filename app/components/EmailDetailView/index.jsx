import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import { Forward, Delete, Reply } from "@mui/icons-material";
import { EmailDetailViewStyles as styles } from "./index.styles";
import moment from "moment";
import SendEmailModal from "../SendEmail";
const EmailDetailView = ({ email }) => {
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const [replyModalData, setReplyModalData] = useState({});

  const handleReply = () => {
    setOpenReplyModal(true);
    const emailInfo = {
      to: email.from.emailAddress.address,
      cc: email.ccRecipients[0].emailAddress.address,
    };
    console.log("email", email);
    console.log("emailInfo", emailInfo);
    setReplyModalData(emailInfo);
  };
  return (
    <Box component="main" sx={styles.mainContainer}>
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Typography sx={styles.subject}>{email.subject}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={styles.senderInfo}>
              <Avatar
                sx={{
                  height: "2rem",
                  width: "2rem",
                  background: "#a0c4ff",
                  color: "#4274e1",
                  marginRight: "0.5rem",
                }}
              />
              <Typography sx={styles.senderName}>
                {email.sender.emailAddress.name}
              </Typography>
              <Typography sx={styles.senderEmail}>
                {`<${email.sender.emailAddress.address}>`}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
            >
              <Typography sx={styles.senderEmail}>
                {moment(email.sentDateTime).format("MMM d, yyyy, h:mm A")}
              </Typography>
              <IconButton>
                <Reply />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Typography sx={styles.body}>{email.body.content}</Typography>
        <Box sx={styles.actions}>
          <Box>
            <Button
              startIcon={<Reply />}
              sx={styles.actionButton}
              variant="outlined"
              size="small"
              onClick={handleReply}
            >
              Reply
            </Button>
            {/* <Button
              startIcon={<Forward />}
              sx={styles.actionButton}
              variant="outlined"
              size="small"
            >
              Forward
            </Button> */}
          </Box>
          {/* <IconButton color="error">
            <Delete />
          </IconButton> */}
        </Box>
      </Box>
      {openReplyModal && (
        <SendEmailModal
          open={openReplyModal}
          handleClose={() => setOpenReplyModal(false)}
          emailInfo={replyModalData}
        />
      )}
    </Box>
  );
};

export default EmailDetailView;
