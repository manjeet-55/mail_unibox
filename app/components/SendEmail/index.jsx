import React, { useEffect, useState } from "react";
import { Modal, Box, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SendEmailStyles } from "./index.styles"; // Import the styles
import axios from "axios";
const SendEmailModal = ({ open, handleClose, emailInfo }) => {
  const dummyEmailData = {
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    body: "",
  };
  const [emailData, setEmailData] = useState(emailInfo || dummyEmailData);
  const [ccEnabled, setCcEnabled] = useState(false);
  const [bccEnabled, setBccEnabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleOutlookEmailSend = async () => {
    const dataToBeSent = {
      mail: {
        message: {
          subject: emailData.subject,
          body: {
            contentType: "Text",
            content: emailData.body,
          },
          toRecipients: [
            {
              emailAddress: {
                address: emailData.to,
              },
            },
          ],
          ...(emailData.cc && {
            ccRecipients: [
              {
                emailAddress: {
                  address: emailData.cc,
                },
              },
            ],
          }),
          ...(emailData.bcc && {
            bccRecipients: [
              {
                emailAddress: {
                  address: emailData.bcc,
                },
              },
            ],
          }),
        },
        saveToSentItems: true,
      },
    };
    const accessToken = localStorage.getItem("access_token");
    // console.log("data going", dataToBeSent, "accessToken", accessToken);

    const apiUrl = `http://localhost:3000/sendMail?access_token=${accessToken}`;
    try {
      const response = await axios.post(apiUrl, dataToBeSent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log("Email sent successfully:", response.data);
      // handleClose();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const {
    modal,
    box,
    header,
    headerTitle,
    closeButton,
    formContainer,
    inputLabel,
    input,
    ccBccToggle,
    textAreaLabel,
    textArea,
    footer,
  } = SendEmailStyles;

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={modal}
    >
      <Box sx={box}>
        <Box sx={header}>
          <Typography sx={headerTitle}>New Message</Typography>
          <IconButton onClick={handleClose} sx={closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={formContainer}>
          <label style={inputLabel}>
            <span style={{ width: "2.5rem" }}>To</span>
            <input
              type="text"
              name="to"
              value={emailData.to}
              onChange={handleChange}
              style={input}
            />
            {!ccEnabled && (
              <span style={ccBccToggle} onClick={() => setCcEnabled(true)}>
                cc
              </span>
            )}
            {!bccEnabled && (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setBccEnabled(true)}
              >
                bcc
              </span>
            )}
          </label>
          {ccEnabled && (
            <label style={inputLabel}>
              <span style={{ width: "2.5rem" }}>Cc</span>
              <input
                type="text"
                name="cc"
                value={emailData.cc}
                onChange={handleChange}
                style={input}
              />
            </label>
          )}
          {bccEnabled && (
            <label style={inputLabel}>
              <span style={{ width: "2.5rem" }}>Bcc</span>
              <input
                type="text"
                name="bcc"
                value={emailData.bcc}
                onChange={handleChange}
                style={input}
              />
            </label>
          )}
          <label style={inputLabel}>
            <input
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleChange}
              style={input}
              placeholder="Subject"
            />
          </label>
          <label style={textAreaLabel}>
            <textarea
              name="body"
              rows="8"
              value={emailData.body}
              onChange={handleChange}
              style={textArea}
            />
          </label>
        </Box>
        <Box sx={footer}>
          <Button onClick={handleClose} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOutlookEmailSend}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SendEmailModal;
