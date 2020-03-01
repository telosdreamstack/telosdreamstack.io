/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    file: file(relativePath: { regex: "/telosdreamstack-landing.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <Layout>
      <SEO title="Home" />

      <Flex>
        <Box sx={{width: '45%', paddingLeft: '5%'}}>
          <Img fadeIn={false} fluid={data.file.childImageSharp.fluid}/>
        </Box>
        <Flex sx={{justifyContent: 'center', flexDirection: 'column', paddingLeft: '5%', width: '55%'}}>
          <Styled.h1 sx={{color: 'midnight', letterSpacing: '.08em', fontSize:'3em'}}>The Telos DreamStack</Styled.h1>
          <p sx={{textAlign: 'right', fontSize: '2em'}}>
            A fullstack development framework for real-time applications.
          </p>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default IndexPage
