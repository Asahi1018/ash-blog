import Layout from '../components/Layout/Layout'
import {MenuOpenProvider} from '../context/MenuOpenContext'

function MyApp({ Component, pageProps }) {
  return (
    <MenuOpenProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuOpenProvider>
   
    ) 
}

export default MyApp
