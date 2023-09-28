import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen text-center p-24">
      <Link className="button" href='/toggle'>Toggle useref using app directory</Link>
      <Link className="button" href='/togglepage'>Toggle useref using pages directory</Link>
    </main>
  )
}
