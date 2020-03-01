/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Work() {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { regex: "/under-construction.png/" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Box sx={{}}>
      <Styled.h2>Work in progress...</Styled.h2>
      <p>
        Read{' '}
        <Link to="/introducing-telos-dreamstack">
          Introducing Telos DreamStack
        </Link>{' '}
        and support{' '}
        <a
          target="_blank"
          href="https://chainspector.io/governance/worker-proposals/125"
        >
          WPS #125
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          href="https://chainspector.io/governance/worker-proposals/124"
        >
          WPS #124
        </a>{' '}
      </p>
      <Img
        sx={{ maxWidth: 400, margin: '0 auto' }}
        fluid={data.file.childImageSharp.fluid}
      />
    </Box>
  )
}
