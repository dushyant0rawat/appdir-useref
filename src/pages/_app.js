
import '../globals.css'


export default function App({ Component, pageProps }) {

  const { navbarProps} = pageProps
  return (
    <>
    <Component {...pageProps} />
    </>
   
  )
}