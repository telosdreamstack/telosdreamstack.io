/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'
import useMedia from 'use-media'
import Layout from '../layout'
import SEO from '../components/seo'

import Illustration from '../../content/assets/landing-page.svg'

const IndexPage = () => {
  const isWide = useMedia({ minWidth: '650px' }, false)
  return (
    <Layout>
      <SEO title="Home" />

      <Flex sx={{ flexDirection: isWide ? 'row' : 'column', paddingTop: isWide ? 0 : 2}}>

        <Box sx={{ width: isWide ? '45%' : '100%', paddingLeft: '5%'}}>
          <Illustration width="100%"/>
        </Box>

        <Flex
          sx={{
            justifyContent: 'center',
            flexDirection: 'column',
            paddingLeft: '5%',
            width: isWide ? '55%' : '100%',
            textAlign: isWide ? 'left' : 'center',
          }}
        >
          <Styled.h1
            sx={{ color: 'midnight', letterSpacing: '.08em', fontSize: '3em' }}
          >
            The Telos DreamStack
          </Styled.h1>
          <p sx={{ textAlign: isWide ? 'right' : 'center', fontSize: '2em' }}>
            A fullstack development framework for real-time applications.
          </p>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default IndexPage
