import {client} from '../libs/client'

export const getStaticProps = async () => {
  const data = await client.get({endpoint:"blog"});
  return {
    props:
  }
}

export default function Home() {
  return (
    <>
    
    </>

  )
}
