import {client} from '../libs/client'

export const getStaticProps = async () => {
  const data = await client.get({endpoint:"blog"});
  console.log(data);
  return {
    props:{
      blog:data,
    }
  }
}

export default function Home({blog}) {
  return (
    <>
    {blog.contents}
    </>

  )
}
