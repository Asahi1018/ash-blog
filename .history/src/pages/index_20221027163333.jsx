import Test from '../components/Test'
import {client} from '../../libs/client'


export const getStaticProps = async (context) => {
  const data = await client.get({endpoint:"blog"});
  return {
    props:{
      blog:data,
    }
  }
}

export default function HomeC({blog}) {
  return (
    <Test blog={blog}/>
  )
}
