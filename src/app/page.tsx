import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="mt-5 flex flex-col items-center gap-5">
      <p className="text-bolder text-xl"> Home Page</p>
      <Link className="button" href='/toggle'>Toggle useref using app directory</Link>
      <Link className="button" href='/togglepage'>Toggle useref using pages directory</Link>
    </main>
  )
}
