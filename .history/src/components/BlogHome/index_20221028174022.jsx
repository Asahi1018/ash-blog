import Link from 'next/link'
import styles from './BlogHome.module.scss'

export default function Home({blog}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Welcome to Ash Blog!</h1>
        <p className={styles.sub_title}>~高校生の実態を丸裸~</p>
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
      {/* <div className={styles.title_container}>
       <h1 className={styles.title}>{'Welcome to\nAsh Web App!'}</h1>
      </div> */}
    </>
  )
}

