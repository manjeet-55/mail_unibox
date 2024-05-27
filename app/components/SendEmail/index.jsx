import React, { useState } from "react";
import { Modal, Box, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SendEmailStyles } from "./index.styles"; // Import the styles
import axios from "axios";
import { toast } from "react-toastify";
const SendEmailModal = ({ open, handleClose, emailInfo }) => {
  const [outLookEmail, setOutlookEmail] = useState(
    localStorage.getItem("outlookemail")
  );
  const [googleEmail, setGoogleEmail] = useState(localStorage.getItem("gmail"));

  // console.log("outLookEmail", outLookEmail, "googleEmail", googleEmail);

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

  const [fromEmail, setFromEmail] = useState(outLookEmail);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    if (fromEmail == outLookEmail) {
      handleOutlookEmailSend();
    } else {
      handleGoogleEmailSend();
    }
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
      toast.success("Email Sent Successfully");
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
            <span style={{ width: "2.5rem", marginRight: "0.5rem" }}>From</span>
            <input
              type="text"
              name="from"
              list="emailSuggestions"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              style={input}
            />
            <datalist id="emailSuggestions">
              {[outLookEmail, googleEmail].map((email, index) => (
                <option key={index} value={email} />
              ))}
            </datalist>
          </label>
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
          <Button variant="contained" color="primary" onClick={handleSendEmail}>
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SendEmailModal;
