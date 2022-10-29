import { client } from '../../libs/client'
import Link from 'next/link'
import styles from '../../styles/components/[id].module.scss'
import PubTime from '../../components/PubTime'
import UpdateTime from '../../components/UpdateTime'


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
            <h1 className={styles.title}>{blog.title}</h1>
            Time>
            <PubTime className={styles.time} pubTime={blog.publishedAt}/>
            <UpdateTime className={styles.time} updateTime={blog.updatedAt}/>
            <div className={styles.contents} dangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
            <Link href="/"> ←Back to Home </Link>
        </>
        
    )
};
export default Test;