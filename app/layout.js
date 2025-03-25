import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jira Clone",
  description: "project management app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables:{
          colorPrimary:"#3b82f6",
          colorBackground:"#1a202c",
          colorInputBackground:"#2D3748",
          colorInputText:"#F3F4F6"
        },
        elements:{
          formButtonPrimary:"text-white",
          card:"bg-gray-500",
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.className} dotted-background`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className=" theme border-t-2 py-12">
              <div className="container mx-auto text-center text-gray-200">
                <p>This is a footer 😊</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
