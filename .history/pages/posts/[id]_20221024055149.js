import { client } from '../../libs/client'

export const getStaticPaths = async () => {
    const data = await client.get({endpoint:"blog"});
    const params = data.contents.map(_content => `/blog/${_conten.id}`)
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

