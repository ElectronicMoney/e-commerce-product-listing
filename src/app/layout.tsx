import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProvider from "@/theme/Provider"
import MainLayout from "@/layouts"
import Providers from "./StoreProvider";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://localhost:3000'),
  generator: 'Next.js',
  applicationName: 'E-Store',
  referrer: 'origin-when-cross-origin',
  keywords: ['ecommerce', 'shopping', 'products'],
  creator: 'Emeka Augustine'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Providers>
              <ThemeProvider>
                <MainLayout>
                    {children}
                  </MainLayout>
              </ThemeProvider>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
