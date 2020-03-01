/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'

import Layout from '../layout'
import SEO from '../components/seo'
import Work from '../components/work'

const DappStarters = () => (
  <Layout>
    <SEO title="dApp Starters" />

    <Box sx={{ textAlign: 'center' }}>
      <Styled.h1>Application Starters</Styled.h1>
      <Work />
    </Box>
  </Layout>
)

export default DappStarters
