import './globals.css'
import { Inter } from 'next/font/google';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Songsmith',
  description: 'Unlock Your Songwriting Potential',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id='app'>

        {children}
      </body>
    </html>
  )
}
