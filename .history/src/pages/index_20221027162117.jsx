import second from '../components/'
// import {client} from '../../libs/client'
// import Link from 'next/link'

// export const getStaticProps = async (context) => {
//   const data = await client.get({endpoint:"blog"});
//   return {
//     props:{
//       blog:data,
//     }
//   }
// }

export default function Home({blog}) {
  return (
    <>
    <div>
      <h1>Welcome to </h1>
    </div>
    {blog.contents.map(_blog => {
      return (  
      <li key={_blog.id}>
          <Link href={`posts/${_blog.id}`} >{_blog.title}</Link>
        </li>)
      })}  
    </>
  )
}
