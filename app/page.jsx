"use client";
import { Box, Button, Grid, Typography, Divider } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "../assets/google.png";
import MicrosoftLogo from "../assets/microsoft.svg";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleSignIn = (provider) => () => {
    signIn(provider);
  };

  return (
    <Grid container component="main" sx={styles.mainGrid}>
      <Grid item xs={12} sx={styles.fullScreen}>
        <Box sx={styles.boxContainer}>
          <Typography component="h1" variant="h3" sx={styles.heading}>
            Mail Unibox
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Button
              onClick={handleSignIn("google")}
              variant="contained"
              sx={styles.signInButton}
              startIcon={
                <Image src={google} alt="Google" width={19} height={19} />
              }
            >
              Sign in with Google
            </Button>
            <Divider sx={styles.divider}>or</Divider>
            <Button
              onClick={() => router.push("http://localhost:3000/login")}
              variant="contained"
              color="secondary"
              sx={styles.signInButton}
              startIcon={
                <Image
                  src={MicrosoftLogo}
                  alt="Microsoft"
                  width={19}
                  height={19}
                />
              }
            >
              Sign in with Microsoft
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
const styles = {
  mainGrid: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    background:'#fcfcfc',
    textAlign: "center",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    marginBottom: "2rem",
    color: "#333",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  signInButton: {
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "8px",
    "& img": {
      marginRight: "0.5rem",
    },
  },
  divider: {
    margin: "0.5rem 0",
    width: "100%",
    "&::before, &::after": {
      borderTop: "thin solid #ddd",
    },
    color: "#888",
  },
};
