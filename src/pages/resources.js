/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'

import Layout from '../layout'
import SEO from '../components/seo'
import Work from '../components/work'

const Resources = () => (
  <Layout>
    <SEO title="Resources" />

    <Box sx={{ textAlign: 'center' }}>
      <Styled.h1>Resources</Styled.h1>
      <Work />
    </Box>
  </Layout>
)

export default Resources
