import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen text-center p-24">
      <p> Home Page</p>
    </main>
  )
}
