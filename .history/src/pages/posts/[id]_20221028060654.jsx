import { client } from '../../../libs/client'
import Link from 'next/link'
import Time from '../../components/Time/Time'
import styles from '../../styles/blog.module.scss'


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
        <div className={styles.header}>
            <h1 className={styles.title}>{blog.title}</h1>
            <Time pubTime={blog.publishedAt} updateTime={blog.updatedAt}/>
        </div>
        <div classdangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
        <Link href="/"> ←Back to Home </Link>
    
    </>
        
    )
};
export default Test;