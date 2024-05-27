import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./store/Proivder";
import Main from "./Main";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Main session={session} children={children}>
            </Main>
        </Providers>
      </body>
    </html>
  );
}
