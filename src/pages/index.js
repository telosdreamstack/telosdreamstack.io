import React from 'react'
import { Layout, SEO } from 'components/common'
import { Intro, Skills, Contact, Projects } from 'components/landing'
import diagramImg from 'assets/TelosDreamStackFull.png'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <div style={{textAlign: 'center'}}>
      <img src={diagramImg} alt="" />
    </div>
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)
