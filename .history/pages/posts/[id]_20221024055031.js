import { client } from '../../libs/client'

export const getStaticPaths = async () => {
    const data = await client.get({endpoint:"blog"});
    const params = data.contents.
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

