import {client} from '../../libs/client'
import Link from 'next/link'

export const getStaticProps = async (context) => {
  const data = await client.get({endpoint:"blog"});
  return {
    props:{
      blog:data,
    }
  }
}

export default function Home({blog}) {
  return (
    <>
    
    {blog.contents.map(_blog => {
      return (  
       <>
          <div>ｋｓｌｊふぁｓｄ；ｌｊｆｌ；さｊｆｄｓ；ｌｄｊさｆｌｋｄさｆｌ</div>
          <li key={_blog.id}>
              <Link href={`posts/${_blog.id}`} >{_blog.title}</Link>
          </li>
       </>

        )})}  
    </>
  )
}
