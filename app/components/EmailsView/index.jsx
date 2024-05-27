"use client";

import React from "react";
import Image from "next/image";
import { Box, Paper, Typography, Grid } from "@mui/material";
import GoogleImage from "../../../assets/Gmail_Logo.svg";
import MicrosoftImage from "../../../assets/Outlook_Logo.svg";
import moment from "moment";
import { EmailListViewStyles as styles } from "./index.styles";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllEmails,
  setGoogleEmails,
} from "../../store/Features/emailsDataSlice";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Emails = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [messages, setMessages] = useState([]);

  console.log("session", session);
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
              const headers = messageDetails.data.payload.headers;
              const labelIds = messageDetails.data.labelIds;
              const parts = messageDetails.data.payload.parts || [];
              let body = {
                content: "",
              };
              parts.forEach((part) => {
                if (part.body.data) {
                  // Decode the Base64 encoded data (handling URL-safe characters)
                  const decodedData = atob(
                    part.body.data.replace(/-/g, "+").replace(/_/g, "/")
                  );
                  // Append the decoded HTML directly to the body variable
                  body.content += decodedData;
                  // body.content = part.body.data;
                }
              });

              console.log("body", body);
              const isRead = labelIds.includes("UNREAD") ? false : true;
              const fromHeader =
                headers.find((header) => header.name === "From")?.value || "";
              const senderRegex = /(.*) <(.*)>/;
              const senderMatch = fromHeader.match(senderRegex);
              const sender = {
                emailAddress: {
                  name: senderMatch ? senderMatch[1] : "",
                  address: senderMatch ? senderMatch[2] : "",
                },
              };
              const details = {
                id: messageDetails.data.id,
                bodyPreview: messageDetails.data.snippet,
                lastModifiedDateTime:
                  headers.find((header) => header.name === "Date")?.value || "",
                subject:
                  headers.find((header) => header.name === "Subject")?.value ||
                  "",
                to: headers.find((header) => header.name === "To")?.value || "",
                body: body,
                sender,
                isRead,
              };
              return details;
            })
          );
          dispatch(setGoogleEmails(messagesData));
          setMessages(messagesData);
        } catch (error) {
        }
      };

      fetchMessages();
    }
  }, [session]);
  console.log("messages", messages);

  const router = useRouter();
  const emails = useSelector(selectAllEmails);
  console.log("emails", emails);
  return (
    <>
      <Box sx={styles.mainBox}>
        <Paper elevation={1} sx={styles.paper}>
          {emails?.map((email, index) => (
            <Box
              key={index}
              sx={styles.emailBox(email.isRead)}
              onClick={() => {
                router.push(`/emails/${email.id}`);
              }}
            >
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  <Typography variant="body1" sx={styles.senderName}>
                    {email.sender.emailAddress.name.split(" ")[0]}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1" noWrap>
                    {email.subject} -{" "}
                    <span style={styles.emailBody}>{email.bodyPreview}</span>
                  </Typography>
                </Grid>
                <Grid item xs={1} justifyContent="center">
                  <Typography variant="body2" sx={styles.emailDate}>
                    {moment(email.lastModifiedDateTime).format("MMMM D")}
                  </Typography>
                </Grid>
                <Grid item xs={1} sx={styles.emailFlag}>
                  {email.hasOwnProperty("flag") ? (
                    <Image
                      src={MicrosoftImage}
                      width={20}
                      height={20}
                      alt="microsoft"
                    />
                  ) : (
                    <Image
                      src={GoogleImage}
                      width={20}
                      height={20}
                      alt="google"
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
          ))}
        </Paper>
      </Box>
    </>
  );
};

export default Emails;
