/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui'

import Layout from '../layout'
import SEO from '../components/seo'
import Work from '../components/work'

const RealTimeGraphQL = () => {
  return (
    <Layout>
      <SEO title="Real-time GraphQL" />

      <Box sx={{ textAlign: 'center' }}>
        <Styled.h1>Real-Time GraphQL</Styled.h1>
        <Work />
      </Box>
    </Layout>
  )
}

export default RealTimeGraphQL
