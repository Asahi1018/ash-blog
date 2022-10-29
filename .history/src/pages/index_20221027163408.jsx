import Home from '../components/Home'
import {client} from '../../libs/client'


export const getStaticProps = async (context) => {
  const data = await client.get({endpoint:"blog"});
  return {
    props:{
      blog:data,
    }
  }
}

export default function Contents({blog}) {
  return (
    <Home blog={blog}/>
  )
}
