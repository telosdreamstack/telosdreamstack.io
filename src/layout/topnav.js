/** @jsx jsx */
import { jsx, Flex, Grid } from 'theme-ui'
// import { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import useWindowScrollPosition from '@rehooks/window-scroll-position'
import Img from 'gatsby-image'

const TopNav = () => {
  // const [isSticky, setSticky] = useState(false)
  // const windowPosition = useWindowScrollPosition({ throttle: 100 })

  // useEffect(()=>{
  //   setSticky(windowPosition.y > 0)
  // },[windowPosition])

  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { regex: "/telosdreamstack-logo.png/" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <Flex
      py="3"
      sx={{
        background: '#fffff',
        // position: isSticky ? 'fixed' : 'relative',
        justifyContent: 'center',
      }}
    >
      <div sx={{ variant: 'layout.container' }}>
        <Grid
          gap="3"
          columns="1fr 250px 1fr"
          py="3"
          mx="auto"
          sx={{
            gridAutoFlow: 'row',
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Link
              to="/why-telos"
              sx={{
                variant: 'styles.navlink',
                p: 2,
              }}
            >
              Why TELOS?
            </Link>
            <Link
              to="/technology"
              sx={{
                variant: 'styles.navlink',
                p: 2,
              }}
            >
              Technology
            </Link>
            <Link
              to="/dapp-starters"
              sx={{
                variant: 'styles.navlink',
                p: 2,
              }}
            >
              dApp Starters
            </Link>
          </Flex>

          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link to="/">
              <Img fadeIn={false} fixed={data.file.childImageSharp.fixed} />
              <span
                sx={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  overflow: 'hidden',
                  top: -9999,
                }}
              >
                Home
              </span>
            </Link>
          </Flex>

          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Link
              to="/realtime-graphql"
              sx={{
                variant: 'styles.navlink',
                p: 2,
              }}
            >
              Real-time GraphQL
            </Link>
            <Link
              to="/blog"
              sx={{
                variant: 'styles.navlink',
                p: 2,
              }}
            >
              Articles
            </Link>
            <Link
              to="/resources"
              sx={{
                variant: 'styles.navlink',
                p: 2,
              }}
            >
              Resources
            </Link>
          </Flex>
        </Grid>
      </div>
    </Flex>
  )
}

export default TopNav
