import { client } from '../../libs/client'

export const getStaticPaths = () => {
    const data = await
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

