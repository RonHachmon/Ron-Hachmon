import "@styles/globals.css";
import Spotlight from "@components/Spotlight";
import { SpotlightCard } from "@components/Spotlight";
import Analytics from "@components/Analytics";
import { Inter, Outfit, Source_Sans_3 } from 'next/font/google'


export const metadata = {
  metadataBase: new URL('https://ron-hachmon.vercel.app'),
  title: "Ron Hachmon | Software Developer",
  description: "Software developer portfolio showcasing projects and experience in full-stack development, React, Next.js, and modern web technologies.",
  keywords: ["Ron Hachmon", "Software Developer", "Full Stack Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Ron Hachmon" }],
  creator: "Ron Hachmon",
  publisher: "Ron Hachmon",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ron-hachmon.vercel.app',
    title: 'Ron Hachmon | Software Developer',
    description: 'Software developer portfolio showcasing projects and experience in full-stack development.',
    siteName: 'Ron Hachmon Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ron Hachmon | Software Developer',
    description: 'Software developer portfolio showcasing projects and experience in full-stack development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#0f172a',
};

// Font options - switch between these by changing the className on html element
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Modern geometric sans - distinctive headings with personality
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

// Clean readable body text
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

// Switch fonts: inter.className (original) OR `${outfit.variable} ${sourceSans.variable} font-sans` (new)
const RootLayout = ({ children }) => (
  <html lang='en' id="app-U" className={`${outfit.variable} ${sourceSans.variable} font-sans`}>
        <head>
          <link rel='icon' href='/logo.svg'/>
      </head>
    <body className="h-full w-screen overflow-auto">
      <Analytics /> {/* Add the Analytics component here */}
      <div className="h-full w-screen ">
        <Spotlight className=" h-full w-screen">
        <SpotlightCard>
          {children}
        </SpotlightCard>
        </Spotlight>
    </div>  
    </body>
  </html>
);

export default RootLayout;