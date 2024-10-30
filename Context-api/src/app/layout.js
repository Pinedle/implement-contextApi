"use client";

import UserProvider from "../context/UserContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
   <html lang="en">
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />
    </head>
    <body>
      <UserProvider>
        {children}
      </UserProvider>
    </body>
   </html>
  );
}

