import '../styles/globals.scss'
import Layout from '../components/layout'
import {} from '../context/MenuOpenContext'

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
    <Component {...pageProps} />
    </Layout>
   
    ) 
}

export default MyApp
