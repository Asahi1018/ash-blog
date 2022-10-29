import {client} from '../libs/client'

export const getStaticProps = async () => {
  const data = await client.get({endpoint:"blog"});
  return {
    props:{
      data
    }
  }
}

export default function Home() {
  return (
    <>
    
    </>

  )
}
