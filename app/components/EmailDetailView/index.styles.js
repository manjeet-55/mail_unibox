export const EmailDetailViewStyles = {
  mainContainer: {},
  container: {
    flexGrow: 1,
    padding: "1rem",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    overflowY: "auto",
  },
  header: {
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
  },
  senderInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  senderName: {
    fontWeight: 600,
    marginRight: "0.5rem",
  },
  senderEmail: {
    color: "#757575",
    fontSize: "0.9rem",
  },
  subject: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "1rem",
    marginLeft:'1rem'
  },
  body: {
    lineHeight: 1.6,
  },
  actions: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  actionButton: {
    marginRight: "0.5rem",
    textTransform: "none",
  },
};
