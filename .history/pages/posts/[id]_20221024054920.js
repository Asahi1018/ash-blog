import { client } from '../../libs/client'

export const getStaticPaths = async () => {
    const data = await client.get({endpoint:"ashblog"})
}


export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const data = await client.get({endpoint:"ashblog",contentId: id})
    return {
        props:{
            blog:data,
        }
    }
};

