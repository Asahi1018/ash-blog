import BlogHome from '../../components/BlogHome'
import {client} from '../../../'


export const getStaticProps = async (context) => {
  const data = await client.get({endpoint:"blog"});
  return {
    props:{
      blog:data,
    }
  }
}
export default function Post({blog}) {
    return (
        <BlogHome/>
    )
}