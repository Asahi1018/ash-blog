import '../styles/globals.css'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Component {...pageProps} />

    <Layout>aaa</Layout>
    </>
   
    ) 
}

export default MyApp
