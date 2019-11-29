import React from 'react'
import { Layout, SEO } from 'components/common'
import { Intro, Skills, Contact, Projects } from 'components/landing'
import diagramImg from 'assets/TelosDreamStackFull.svg'
import { Container } from 'components/common'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Container>
    <img src={diagramImg} alt="" />
    </Container>
    <Projects />
    <Skills />
    {/* <Contact /> */}
  </Layout>
)
