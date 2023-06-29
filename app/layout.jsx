import "@styles/globals.css";
import Spotlight from "@components/Spotlight";
import { SpotlightCard } from "@components/Spotlight";
import { Inter } from 'next/font/google'


export const metadata = {
  title: "Ron Hachmon",
  description: "best potfolio maybe ever",
};
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }) => (
  <html lang='en' id="app-U" className={inter.className}>
        <head>
          <link rel='icon' href='/logo.svg'/>
      </head>
    <body className="h-full w-screen border-5 overflow-auto ">
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