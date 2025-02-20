import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import './globals.css'
import NavItem from '@/components/shared/NavItem'
import MobileNav from '@/components/shared/MobileNav'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently is a platform for event management.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedIn>
              <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavItem /> 
              </nav>
            </SignedIn>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
              <MobileNav />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}