import Link from 'next/link';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Johan's Portfolio`,
  description: `My personal journey to become a full-stack developer`,
  keywords: `react, nextjs, tailwindcss, dailyui, personal project, nextjs13`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href={`/`} className="btn btn-ghost normal-case text-xl">Johan's</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={`/about`}>About</Link>
              </li>
              <li>
                <Link href={`/about/contact`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
