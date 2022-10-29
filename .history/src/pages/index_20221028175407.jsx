import BlogHome from '../components/BlogHome'
import AppHome from '../components/AppHome'
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
  <>
    {/* <BlogHome blog={blog}/> */}
    <AppHome />    
  </>
  )
}
