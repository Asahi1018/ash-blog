import Link from 'next/link'
import styles from './BlogHome.module.scss'

export default function Home({blog}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Welcome to Ash Blog!</h1>
        <p className={styles.sub_title}>~高校生の実態を丸裸~</p>
      </div>
      <div className={styles.list_container}>
        <h2 className={styles.h2}>Blog List</h2>
        <ul className={styles.ul}>
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

