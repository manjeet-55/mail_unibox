export const EmailListViewStyles = {
  mainBox: {
    flexGrow: 1,
    bgcolor: "background.default",
    padding: "0.5rem",
  },
  paper: {
    background: "#f8f8f8",
  },
  emailBox: (isRead) => ({
    background: isRead ? "#f2f6fc" : "#fefefe",
    padding: "0.35rem 1rem",
    transition: "0.3s ease-in-out",
    "&:hover": { transform: "scale(1.005)" },
    borderBottom: "1px solid #c0c0c0",
    cursor: "pointer",
  }),
  senderName: {
    fontWeight: "bold",
  },
  emailBody: {
    display: "inline-block",
    maxWidth: "70%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    verticalAlign: "bottom",
  },
  emailDate: {
    color: "textSecondary",
  },
  emailFlag: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "0.5rem",
  },
};
