import React from "react";
import Image from "next/image";
import { Box, Paper, Typography, Divider, Grid } from "@mui/material";
import GoogleImage from "../../../assets/google.png";
import MicrosoftImage from "../../../assets/microsoft.svg";
import moment from "moment";
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
const sampleEmail = {
  "@odata.context":
    "https://graph.microsoft.com/v1.0/$metadata#users('a00b630c-decd-48c7-b73e-85c75770eb99')/mailFolders('Inbox')/messages",
  value: [
    {
      "@odata.etag": 'W/"CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh"',
      id: "AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0-x8jAAA=",
      createdDateTime: "2024-05-24T12:52:15Z",
      lastModifiedDateTime: "2024-05-24T12:52:16Z",
      changeKey: "CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh",
      categories: [],
      receivedDateTime: "2024-05-24T12:52:15Z",
      sentDateTime: "2024-05-24T12:52:13Z",
      hasAttachments: false,
      internetMessageId:
        "<PN0PR01MB786348403CC3B6AC03F3B1EAEDF52@PN0PR01MB7863.INDPRD01.PROD.OUTLOOK.COM>",
      subject: "Email Testing",
      bodyPreview: "Sample Email Testing",
      importance: "normal",
      parentFolderId:
        "AQMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1ADQwZjM4MDMyNjIALgAAA5dPPp8mp4JOtTJYUGSh-DABAJOxnfJmviBBuScbONx-JegAAAIBDAAAAA==",
      conversationId:
        "AAQkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgAQANuFlsfpYXlOliAcceFETgE=",
      conversationIndex: "AQHardky24WWx+lheU6WIBxx4UROAQ==",
      isDeliveryReceiptRequested: false,
      isReadReceiptRequested: false,
      isRead: true,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0%2Fx8jAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "text",
        content: "Sample Email Testing",
      },
      sender: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      from: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Prakhar Saxena",
            address: "prakhar.saxena@fiftyfivetech.io",
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            name: "Vasu Bajaj",
            address: "vasu.bajaj@fiftyfivetech.io",
          },
        },
      ],
      bccRecipients: [],
      replyTo: [],
    },
    {
      "@odata.etag": 'W/"CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh"',
      id: "AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0-x8jAAA=",
      createdDateTime: "2024-05-24T12:52:15Z",
      lastModifiedDateTime: "2024-05-24T12:52:16Z",
      changeKey: "CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh",
      categories: [],
      receivedDateTime: "2024-05-24T12:52:15Z",
      sentDateTime: "2024-05-24T12:52:13Z",
      hasAttachments: false,
      internetMessageId:
        "<PN0PR01MB786348403CC3B6AC03F3B1EAEDF52@PN0PR01MB7863.INDPRD01.PROD.OUTLOOK.COM>",
      subject: "Email Testing",
      bodyPreview: "Sample Email Testing",
      importance: "normal",
      parentFolderId:
        "AQMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1ADQwZjM4MDMyNjIALgAAA5dPPp8mp4JOtTJYUGSh-DABAJOxnfJmviBBuScbONx-JegAAAIBDAAAAA==",
      conversationId:
        "AAQkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgAQANuFlsfpYXlOliAcceFETgE=",
      conversationIndex: "AQHardky24WWx+lheU6WIBxx4UROAQ==",
      isDeliveryReceiptRequested: false,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0%2Fx8jAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "text",
        content: "Sample Email Testing",
      },
      sender: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      from: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Prakhar Saxena",
            address: "prakhar.saxena@fiftyfivetech.io",
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            name: "Vasu Bajaj",
            address: "vasu.bajaj@fiftyfivetech.io",
          },
        },
      ],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh"',
      id: "AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0-x8jAAA=",
      createdDateTime: "2024-05-24T12:52:15Z",
      lastModifiedDateTime: "2024-05-24T12:52:16Z",
      changeKey: "CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh",
      categories: [],
      receivedDateTime: "2024-05-24T12:52:15Z",
      sentDateTime: "2024-05-24T12:52:13Z",
      hasAttachments: false,
      internetMessageId:
        "<PN0PR01MB786348403CC3B6AC03F3B1EAEDF52@PN0PR01MB7863.INDPRD01.PROD.OUTLOOK.COM>",
      subject: "Email Testing",
      bodyPreview: "Sample Email Testing",
      importance: "normal",
      parentFolderId:
        "AQMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1ADQwZjM4MDMyNjIALgAAA5dPPp8mp4JOtTJYUGSh-DABAJOxnfJmviBBuScbONx-JegAAAIBDAAAAA==",
      conversationId:
        "AAQkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgAQANuFlsfpYXlOliAcceFETgE=",
      conversationIndex: "AQHardky24WWx+lheU6WIBxx4UROAQ==",
      isDeliveryReceiptRequested: false,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0%2Fx8jAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "text",
        content: "Sample Email Testing",
      },
      sender: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      from: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Prakhar Saxena",
            address: "prakhar.saxena@fiftyfivetech.io",
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            name: "Vasu Bajaj",
            address: "vasu.bajaj@fiftyfivetech.io",
          },
        },
      ],
      bccRecipients: [],
      replyTo: [],
    },
    {
      "@odata.etag": 'W/"CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh"',
      id: "AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0-x8jAAA=",
      createdDateTime: "2024-05-24T12:52:15Z",
      lastModifiedDateTime: "2024-05-24T12:52:16Z",
      changeKey: "CQAAABYAAACTsZ3yZr4gQbknGzjcfyXoAAC0xoZh",
      categories: [],
      receivedDateTime: "2024-05-24T12:52:15Z",
      sentDateTime: "2024-05-24T12:52:13Z",
      hasAttachments: false,
      internetMessageId:
        "<PN0PR01MB786348403CC3B6AC03F3B1EAEDF52@PN0PR01MB7863.INDPRD01.PROD.OUTLOOK.COM>",
      subject: "Email Testing",
      bodyPreview: "Sample Email Testing",
      importance: "normal",
      parentFolderId:
        "AQMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1ADQwZjM4MDMyNjIALgAAA5dPPp8mp4JOtTJYUGSh-DABAJOxnfJmviBBuScbONx-JegAAAIBDAAAAA==",
      conversationId:
        "AAQkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgAQANuFlsfpYXlOliAcceFETgE=",
      conversationIndex: "AQHardky24WWx+lheU6WIBxx4UROAQ==",
      isDeliveryReceiptRequested: false,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkADJkYWQwZWNlLWQ2NDgtNDhlMi04ZDhjLTU1NDBmMzgwMzI2MgBGAAAAAACXTz6fJqeCTrUyWFBkofwwBwCTsZ3yZr4gQbknGzjcfyXoAAAAAAEMAACTsZ3yZr4gQbknGzjcfyXoAAC0%2Fx8jAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "text",
        content: "Sample Email Testing",
      },
      sender: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      from: {
        emailAddress: {
          name: "Vasu Bajaj",
          address: "vasu.bajaj@fiftyfivetech.io",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Prakhar Saxena",
            address: "prakhar.saxena@fiftyfivetech.io",
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            name: "Vasu Bajaj",
            address: "vasu.bajaj@fiftyfivetech.io",
          },
        },
      ],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
  ],
  "@odata.nextLink":
    "https://graph.microsoft.com/v1.0/me/mailFolders('Inbox')/messages?%24top=10&%24skip=10",
};

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", padding: "0.5rem" }}
    >
      <Paper elevation={3} sx={{ background: "#f8f8f8" }}>
        {sampleEmail.value.map((email, index) => (
          <Box
            key={index}
            sx={{
              background: email.isRead ? "#f2f6fc" : "#fefefe",
              padding: "0.35rem 1rem",
              transition: "0.3s ease-in-out",
              //   "&:hover": { transform: "" },
              //   borderRadius: 1,
              borderBottom: "1px solid #c0c0c0",
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body1" fontWeight="bold">
                  {email.sender.emailAddress.name.split(" ")[0]}
                </Typography>
              </Grid>
              <Grid item xs={8} sx={{ background: "" }}>
                <Typography variant="body1">
                  {email.subject} -{" "}
                  <span style={{ color: "gray" }}>{email.bodyPreview}</span>
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="body2" color="textSecondary">
                  {moment(email.lastModifiedDateTime).format("MMMM D")}
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "0.5rem",
                }}
              >
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
            {/* {index < emailsData.length - 1 && (
              <Divider sx={{ marginTop: "0.25rem", width: "100%" }} />
            )} */}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default MainContent;
