import {client} from '../libs/client'
import Link from 'next/link'
import {} from '../styles/Home.module.css'
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
    <aside>
      <nav>
        <ul>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
          <li>list4</li>
          <li>list5</li>
        </ul>
      </nav>
    </aside>
    <main>
    {blog.contents.map(_blog => {
     return (  <li key={_blog.id}>
        <Link href={`posts/${_blog.id}`} >{_blog.title}</Link>
      </li>)
    })}
    </main>
    </>

  )
}
