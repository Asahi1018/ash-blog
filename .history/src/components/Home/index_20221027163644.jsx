import Link from 'next/link'


export default function Home({blog}) {
  return (
    <>
      <div>
        <h1>Welcome to Ash Blog!</h1>
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

