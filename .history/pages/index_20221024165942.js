import {client} from '../libs/client'
import Link from 'next/link'

export const getStaticProps = async (context) => {
  const data = await client.get({endpoint:"blog"});
  // console.log();
  return {
    props:{
      blog:data,
    }
  }
}

export default function Home({blog}) {
  return (
    <>
    <header>
      <h1>Ash's Blog</h1>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
    <main>

      
    </main>
    {blog.contents.map(_blog => {
     return (  <li key={_blog.id}>
        <Link href={`posts/${_blog.id}`} >{_blog.title}</Link>
      </li>)
    })}
    </>

  )
}
