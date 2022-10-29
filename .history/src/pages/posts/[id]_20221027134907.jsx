import { client } from '../../../libs/client'
import Link from 'next/link'
import styles from './[id].module.scss'
import Time from '../../components/Time'


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
            <Time className={styles.time} pubTime={blog.publishedAt} updateTime={blog.updatedAt}/>
            <div dangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
            <Link href="/"> ←Back to Home </Link>
        </>
        
    )
};
export default Test;