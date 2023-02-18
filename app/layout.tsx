import SideBar from '../components/SideBar'
import '../styles/globals.css'
import { SessionProvider } from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'
import MobileMenu from '../components/MobileMenu'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session} >
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>

              <SideBar />


              {/* Client Provider */}
              <ClientProvider />

              <div className='bg-[#343541] flex-1'>
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
