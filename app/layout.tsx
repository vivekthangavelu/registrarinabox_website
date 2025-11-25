"use client";

import "./globals.css";
import { ThemeProvider } from "./Providers/theme-provider";
import Header from "./Components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
