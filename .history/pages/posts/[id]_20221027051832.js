import { client } from '../../libs/client'
import Link from 'next/link'
import styles from '../../styles/components/[id].module.scss'

export const getStaticPaths = async () => {
    const data = await client.get({endpoint:"blog"});
    const paths = data.contents.map(_content => `/posts/${_content.id}`)
    return {
        paths,
        fallback:false,
    }
}   


export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const data = await client.get({endpoint:"blog",contentId: id})
    return {
        props:{
            blog:data,
        }
    }
};

 const Test  = ({blog}) => {
    const blogPubDate = blog.publishedAt.replace('T'," ").replace("Z","").replace("-"," ")
    const year = blog.publishedAt.getFullYear();
    console.log(year);
    return (
        <>

            <h1 className={styles.title}>{blog.title}</h1>
            <time className={styles.time} dateTime={blogPubDate}>{blogPubDate}</time>
            <p>更新日</p>
            <time className={styles.time} dateTime={blog.updatedAt}>【{blog.updatedAt}】</time>
            <div className={styles.contents} dangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
            <Link href="/"> ←Back to Home </Link>
        </>
        
    )
};
export default Test;