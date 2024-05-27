"use client";

import React from "react";
import Image from "next/image";
import { Box, Paper, Typography, Grid } from "@mui/material";
import GoogleImage from "../../../assets/Gmail_Logo.svg";
import MicrosoftImage from "../../../assets/Outlook_Logo.svg";
import moment from "moment";
import { EmailListViewStyles as styles } from "./index.styles";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectAllEmails } from "../../store/Features/emailsDataSlice";

const Emails = () => {
  const router = useRouter();
  const emails = useSelector(selectAllEmails);
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
                  {email.flag ? (
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
