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
    {blog.contents.map(_blog => (
      <li key={_blog.id}>
        <a>{blog.tile}</a>
      </li>
    ))}
    </>

  )
}
