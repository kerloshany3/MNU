import "./globals.css";
import localFont from 'next/font/local'
const ArabicUI = localFont({ src: './fonts/ArabicUIDisplayBlack.ttf' })
import { Bungee } from 'next/font/google'; // Import the Bungee font
import { Abril_Fatface } from 'next/font/google';
import Link from "next/link";



const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: "400"
  // Include the Latin subset
});


const bungee = Bungee({
  subsets: ['latin'], // Include the Latin subset
  weight: "400"
});

export const metadata = {
  title: "MNU",
  description: "Sections MNU",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ArabicUI.className} ${abrilFatface.className} ${bungee.className} bg-slate-800`}
      >
        {children}

        <Link href="/">
          <button className=" active:bg-slate-500 active:ring-4 active:ring-slate-800/20 active:duration-500 active:text-slate-800 font-abril bg-slate-800 m-auto flex justify-center p-2 border-2 border-slate-400 w-fit  rounded-lg mb-6 text-slate-400">created by KerlosDev</button>
        </Link>

      </body>
    </html>
  );
}
