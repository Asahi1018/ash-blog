import '../styles/globals.scss'
import Layout from '../components/layout'
import {MenuOpenProvider,useMenuOpen} from '../context/MenuOpenContext'

function MyApp({ Component, pageProps }) {
  return (
    <MenuOpenProvider>


      
    </MenuOpenProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
   
    ) 
}

export default MyApp
