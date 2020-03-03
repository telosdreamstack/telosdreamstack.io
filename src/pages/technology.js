/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'

import Layout from '../layout'
import SEO from '../components/seo'
import Diagram from '../../content/assets/TelosDreamStackFull.svg'

const Technology = () => (
  <Layout>
    <SEO title="Technology" />

    <Box id="hero" sx={{ textAlign: 'center', justifyContent: 'center' }}>
    <Styled.h1>Technology</Styled.h1>
      <Diagram height="auto" width="100%" />
    </Box>
  </Layout>
)

export default Technology
