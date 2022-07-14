import Head from 'next/head'
import styled from 'styled-components'

//components
import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {

  return (
    <>
      <div>
        <Head>
          <title>Elisabeth Ngo | Portfolio</title>
          <meta name="description" content="Bienvenue sur le portfolio de “Elisabeth Ngo”" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Skills />
        <Projects />
        <Contact />
        
      </div>
    </>
  )
}
