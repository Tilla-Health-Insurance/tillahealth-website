import type { ReactNode } from "react";

import "./globals.css";
// eslint-disable-next-line import/no-unresolved
import "/node_modules/flag-icons/css/flag-icons.min.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add global meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TillaHealth - Your health partner" />

        {/* Add Google Analytics tracking code */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-QZQ49T7JEN`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QZQ49T7JEN');
            `,
          }}
        />

        {/* Add custom fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
