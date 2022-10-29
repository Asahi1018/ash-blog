import Link from 'next/link'


export default function Home({blog}) {
  return (
    <>
      <div>
        <h1>Welcome to Ash Blog!</h1>
        <p>高校3年生が1から作ったはじめてのWebアプリケーションです!</p>
      </div>
      
      <ul>
      {blog.contents.map(_blog => {
      return (  
      <li key={_blog.id}>
          <Link href={`posts/${_blog.id}`} >{_blog.title}</Link>
        </li>)
      })}  
      </ul>
    </>
  )
}

