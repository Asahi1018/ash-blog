import { client } from '../../libs/client'
import Link from 'next/link'
import styles from '../../styles/components/'

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
    return (
        <>

            <h1>{blog.title}</h1>
            <p>投稿日</p>
            <time dateTime={blog.publishedAt}>{blog.publishedAt}</time>
            <p>更新日</p>
            <time dateTime={blog.updatedAt}>{blog.updatedAt}</time>
            <div className={styles.contents} dangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
            <Link href="/"> ←Back to Home </Link>
        </>
        
    )
};
export default Test;