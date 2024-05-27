"use client";
 
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { format } from "date-fns";
import { htmlToText } from "html-to-text";
import LoginPage from "../LoginPage";
 
const Inbox = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (session && session.accessToken) {
      const fetchMessages = async () => {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://gmail.googleapis.com/gmail/v1/users/me/messages?access_token=${session.accessToken}`,
          headers: {},
        };
 
        try {
          const response = await axios.request(config);
          const messagesData = await Promise.all(
            response.data.messages.map(async (message) => {
              const messageDetails = await axios.get(
                `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message.id}?access_token=${session.accessToken}`
              );
              console.log("Message Details:", messageDetails);
              const headers = messageDetails.data.payload.headers;
              const parts = messageDetails.data.payload.parts || [];
              let body = "";
              parts.forEach((part) => {
                if (part.body.data) {
                  const decodedData = atob(
                    part.body.data.replace(/-/g, "+").replace(/_/g, "/")
                  );
                  const text = htmlToText(decodedData, {
                    wordwrap: 130,
                  });
                  body += text;
                }
              });
 
              const details = {
                id: messageDetails.data.id,
                snippet: messageDetails.data.snippet,
                date:
                  headers.find((header) => header.name === "Date")?.value || "",
                subject:
                  headers.find((header) => header.name === "Subject")?.value ||
                  "",
                from:
                  headers.find((header) => header.name === "From")?.value || "",
                to: headers.find((header) => header.name === "To")?.value || "",
                body,
              };
              return details;
            })
          );
          setMessages(messagesData);
        } catch (error) {
          setError(error);
        }
      };
 
      fetchMessages();
    }
  }, [session]);
 
  if (!session) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
 
  if (error) return <div>Error: {error.message}</div>;
 
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return format(date, "MMM dd");
  };
 
  const handleRowClick = (message) => {
    setSelectedMessage(message);
  };
 
  const handleClose = () => {
    setSelectedMessage(null);
  };
 
  return (
    <div>
      <h1>Inbox</h1>
      <Button onClick={() => signOut()}>Sign out</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message) => (
              <TableRow
                key={message.id}
                onClick={() => handleRowClick(message)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>
                  {message.date ? formatDate(message.date) : ""}
                </TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.from}</TableCell>
                <TableCell>{message.to}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={!!selectedMessage}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{selectedMessage?.subject}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{selectedMessage?.body}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};
 
export default Inbox;