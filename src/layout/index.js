/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Global, css } from '@emotion/core'
import TopNav from './topnav'
import Footer from './footer'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet
      meta={[
        {
          property: 'og:image',
          content: 'https://telosdreamstack.io/images/telosdreamstack-logo.png',
        },
      ]}
    />
    <Global
      styles={theme => {
        return css`
          body {
            -webkit-font-smoothing: antialiased;
            background-color: ${theme.colors.background};
            margin: 0;
            font-family: ${theme.fonts.body};
            letter-spacing: 0.03em;
          }
          p,
          ul,
          li {
            line-height: 1.8em;
          }
          article a,
          article a:active,
          article a:visited,
          article a:hover {
            color: #55c3b3 !important;
            text-decoration: none;
          }
        `
      }}
    />

    <Styled.root sx={{ variant: 'layout.root' }}>
      <TopNav />
      <main sx={{ variant: 'layout.main' }}>
        <div sx={{ variant: 'layout.container' }}>{children}</div>
      </main>
      <Footer />
    </Styled.root>
  </React.Fragment>
)

export default Layout
