import { client } from '../../libs/client'
import Link from 'next/link'
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
            <time datetime={blog.publishedAt}>{blog.publishedAt}</time>
            <p>更新日</p>
            <time datetime={blog.updatedAt}>{blog.updatedAt}</time>
            <div  dangerouslySetInnerHTML={{__html:`${blog.body}`}}></div>
            <Link hre=></Link>
        </>
        
    )
};
export default Test;