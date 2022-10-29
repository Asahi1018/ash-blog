import '../styles/globals.scss'
import Layout from '../components/layout'
export const MenuOpenProvider = ({children}) => {
import {} from '../context/MenuOpenContext'

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
    <Component {...pageProps} />
    </Layout>
   
    ) 
}

export default MyApp
