import BlogHome from '../components/BlogHome'
import second from '../components/'
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
    <BlogHome blog={blog}/>
    
  )
}
