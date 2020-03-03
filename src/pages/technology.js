/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import Layout from '../layout'
import SEO from '../components/seo'
import Diagram from '../../content/assets/TelosDreamStackFull.svg'

const Technology = () => (
  <Layout>
    <SEO title="Technology" />

    <Flex id="hero" sx={{ justifyContent: 'center', paddingTop: 3 }}>
      <Diagram height="auto" width="100%" />
    </Flex>
  </Layout>
)

export default Technology
