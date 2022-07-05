import Head from 'next/head'
import {
  Container,
  Main,
} from '../components/sharedstyles'
import ListItem from '../components/listItem'
import json from '../mockItem.json'


export default function Home() {
  return (
    <Container>
      <Head>
        <title>Channel technical test</title>
        <meta name="description" content="Channel technical test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <ListItem json={json}/>
      </Main>
    </Container>
  )
}
