/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'

import Layout from '../layout'
import SEO from '../components/seo'
import Work from '../components/work'

const WhyTelos = () => (
  <Layout>
    <SEO title="Why Telos" />

    <Box sx={{ textAlign: 'center' }}>
      <Styled.h1>Reasons to Launch Telos </Styled.h1>
      <Work />
    </Box>
  </Layout>
)

export default WhyTelos
