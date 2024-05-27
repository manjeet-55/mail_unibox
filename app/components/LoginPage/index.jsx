'use client';
import { Box, Button, Grid, Typography } from "@mui/material";
import { signIn } from 'next-auth/react';
import Image from "next/image";
import google from "../../../assets/google.png"
import MicrosoftLogo from "../../../assets/microsoft.svg";
 
export default function LoginPage() {
    const handleSignIn = (provider) => () => {

      signIn(provider);
    };
    return (
        <Grid component="main" container>
          <Grid item sm={5} rowSpacing={2} columnSpacing={1}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              
              <Typography
                component="h1"
                variant="h3"
                // sx={LoginStyles.headingStyles}
              >
                UniBOX
              </Typography>
              <Grid
                sx={{
                  my: 5,
                  width: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Button
                //   theme="secondary"
                  onClick={handleSignIn('google')}
                  customStyles={{ width: '100%' }}
                >
                  <Image
                    src={google}
                    alt="image"
                    width={88}
                    height={88}
                    style={{ marginRight: '10px', height: '19px', width: '19px' }}
                  />
                  Sign in with Google
                </Button>
                <Grid container sx={{ alignItems: 'center', justify: 'center' }}>
                  <Grid item xs>
                    <hr />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" align="center" sx={{ mx: 2 }}>
                      or
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <hr />
                  </Grid>
                </Grid>
                <Button
                //   theme="secondary"
                  onClick={() => {
                    signIn(
                      'azure-ad',
                      { callbackUrl: '/' },
                      { prompt: 'login' }
                    );
                  }}
                  customStyles={{ width: '100%' }}
                >
                  <Image
                   width={88}
                   height={88}
                    src={MicrosoftLogo}
                    alt="image"
                    style={{ marginRight: '10px', height: '19px', width: '19px' }}
                  />
                  Sign in with microsoft
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      );
    }