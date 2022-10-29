import Link from 'next/link'
import styles from './Home.module.scss'

export default function Home({blog}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Welcome to Ash Blog!</h1>
        <p className={styles.sub_title}>現役高校生</p>
      </div>
      <div>
        <h2>Blog List</h2>
        <ul>
        {blog.contents.map(_blog => {
        return (  
        <li key={_blog.id}>
            <Link href={`posts/${_blog.id}`} >{_blog.title}</Link>
          </li>)
        })}  
        </ul>
      </div> 
    </>
  )
}

