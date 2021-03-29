import { useState  } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

export default function Home() {
  const [text, setText] = useState('# defaultText')

  function change(e) {
    setText(e.target.value)
  }

  //const test = remark().use(remark2react).process(text)
  //const Compo = test.result

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <textarea value={text} onChange={change} ></textarea>
        <div>
          {
          unified()
            .use(parse)
            .use(remark2react)
            .processSync(text).result
          }
          </div>

      </main>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props:{
    }
  }
}
