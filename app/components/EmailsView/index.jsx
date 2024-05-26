import React from "react";
import Image from "next/image";
import { Box, Paper, Typography, Divider, Grid } from "@mui/material";
import GoogleImage from "../../../assets/google.png";
import MicrosoftImage from "../../../assets/microsoft.svg";
import moment from "moment";
import {EmailListViewStyles as styles} from "./index.styles"
import { sampleEmail } from "./sampleData";
const emailsData = [
  {
    sender: "John Doe",
    subject: "Email Subject 1",
    preview: "Email preview text...",
    lastModifiedDateTime: "2024-05-24T12:52:16Z",
  },
  {
    sender: "Jane Smith",
    subject: "Email Subject 2",
    preview: "Email preview text...",
    lastModifiedDateTime: "2024-05-23T10:30:16Z",
  },
  {
    sender: "Alex Johnson",
    subject: "Email Subject 3",
    preview: "Email preview text...",
    lastModifiedDateTime: "2024-05-22T14:22:16Z",
  },
];


const Emails = () => {

  return (
    <Box component="main" sx={styles.mainBox}>
      <Paper elevation={1} sx={styles.paper}>
        {sampleEmail.value.map((email, index) => (
          <Box key={index} sx={styles.emailBox(email.isRead)}>
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
              <Grid item xs={1}>
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
                  <Image src={GoogleImage} width={20} height={20} alt="google" />
                )}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Emails;