import 'src/styles/globals.scss';
import Layout from 'src/components/Layout'
import {MenuOpenProvider} from 'src/context/MenuOpenContext'

function MyApp({ Component, pageProps }) {
  return (
    <MenuOpenProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuOpenProvider>
   
    ) 
}

export default MyApp;
