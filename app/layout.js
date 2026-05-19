import "./globals.css";
import { Navbar8 } from "@/components/navbar-08";
import { Footer13 } from "@/components/footer-13";

export const metadata = {
  metadataBase: new URL("https://oneillscaffolding.com.au"),
  title: {
    default: "O'Neill Scaffolding Group | Queensland Scaffolding Specialists",
    template: "%s | O'Neill Scaffolding Group",
  },
  description:
    "Queensland's trusted scaffolding partner. Commercial, residential, and civil scaffolding solutions — built right, every time. Serving Brisbane and Southeast Queensland.",
  keywords: [
    "scaffolding",
    "Queensland",
    "Brisbane",
    "commercial scaffolding",
    "residential scaffolding",
    "labour hire",
    "scaffolding contractors",
    "Southeast Queensland",
  ],
  authors: [{ name: "O'Neill Scaffolding Group" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "O'Neill Scaffolding Group",
    title: "O'Neill Scaffolding Group | Queensland Scaffolding Specialists",
    description:
      "Queensland's trusted scaffolding partner. Commercial, residential, and civil scaffolding solutions — built right, every time.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar8 />
        <main className="pt-[84px]">
          {children}
        </main>
        <Footer13 />
      </body>
    </html>
  );
}
