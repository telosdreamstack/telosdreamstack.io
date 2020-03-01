/** @jsx jsx */
import { jsx, Flex, Grid, Box } from 'theme-ui'
// import { useState, useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import useWindowScrollPosition from '@rehooks/window-scroll-position'
import Img from 'gatsby-image'
import useMedia from 'use-media'
import { MdClose, MdMenu } from 'react-icons/md'

const navlinks = [
  {
    text: 'Telos',
    url: '/why-telos',
  },
  {
    text: 'Technology',
    url: '/technology',
  },
  {
    text: 'Starters',
    url: '/dapp-starters',
  },
  {
    text: 'Graphql',
    url: '/realtime-graphql',
  },
  {
    text: 'Articles',
    url: '/blog',
  },
  {
    text: 'Resources',
    url: '/resources',
  },
]

const TopNav = () => {
  // const [isSticky, setSticky] = useState(false)
  // const windowPosition = useWindowScrollPosition({ throttle: 100 })

  // useEffect(()=>{
  //   setSticky(windowPosition.y > 0)
  // },[windowPosition])
  const [openMenu, setOpenMenu] = useState(false)
  const isWide = useMedia({ minWidth: '900px' })
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
      py={isWide ? 3 : 2}
      pb={isWide ? 0 : 2}
      sx={{
        background: '#fffff',
        // position: isSticky ? 'fixed' : 'relative',
        justifyContent: 'center',
      }}
    >
      {!isWide && (
        <Fragment>
          <Box
            sx={{
              position: 'absolute',
              top: '1em',
              right: '1em',
              zIndex: 999999,
              cursor: 'pointer',
            }}
          >
            {openMenu ? (
              <MdClose
                sx={{ color: '#fff', width: '2.5em', height: '2.5em' }}
                onClick={() => {
                  setOpenMenu(false)
                }}
              />
            ) : (
              <MdMenu
                onClick={() => {
                  setOpenMenu(true)
                }}
                sx={{ color: 'primary', width: '2.5em', height: '2.5em' }}
              />
            )}
          </Box>
          <Flex
            sx={{
              position: 'fixed',
              bg: 'primary',
              width: openMenu ? '100vw' : 0,
              height: '100vh',
              top: 0,
              right: 0,
              zIndex: 999,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              textAlign: 'center',
              overflow: 'hidden',
              transition: 'all .1s ease',
            }}
          >
            {navlinks.map(({ text, url }) => (
              <Box>
                <Link
                  to={url}
                  sx={{
                    variant: 'styles.navlink',
                    p: 2,
                    color: 'white',
                    fontSize: '1.5em',
                  }}
                  onClick={() => {
                    setOpenMenu(false)
                  }}
                >
                  {text}
                </Link>
              </Box>
            ))}
          </Flex>
        </Fragment>
      )}

      <div sx={{ variant: 'layout.container' }}>
        <Grid
          gap="3"
          columns="1fr 250px 1fr"
          py={isWide ? 3 : 0}
          mx="auto"
          sx={{
            gridAutoFlow: 'row',
          }}
        >
          {!isWide && <Flex />}
          {isWide && (
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {navlinks.slice(0, 3).map(({ text, url }) => (
                <Link
                  to={url}
                  sx={{
                    variant: 'styles.navlink',
                    p: 2,
                  }}
                >
                  {text}
                </Link>
              ))}
            </Flex>
          )}

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

          {!isWide && <Flex />}
          {isWide && (
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {navlinks.slice(3, 6).map(({ text, url }) => (
                <Link
                  to={url}
                  sx={{
                    variant: 'styles.navlink',
                    p: 2,
                  }}
                >
                  {text}
                </Link>
              ))}
            </Flex>
          )}
        </Grid>
      </div>
    </Flex>
  )
}

export default TopNav
