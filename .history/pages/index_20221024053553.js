import {client} from '../libs/client'
import {Link} from 'next/link'

export const getStaticProps = async () => {
  const data = await client.get({endpoint:"blog"});
  console.log(data);
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
     retun   <li key={_blog.id}>
        <Link href="" >{_blog.title}</Link>
      </li>
    })}
    </>

  )
}
