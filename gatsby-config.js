module.exports = {
  siteMetadata: {
    title: 'Telos DreamStack',
    author: {
      name: 'Blockmatic',
      summary: 'buidl buidl.',
    },
    description: 'Telos DreamStack website',
    siteUrl: 'https://telosdreamstack.io/',
    social: {
      twitter: 'telosdreamstack',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-159333286-1',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Telos DreamStack',
        short_name: 'DreamStack',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#571AFF',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
        custom: {
          families: ['Neue Haas Grotesk Roman', 'Neue Haas Grotesk Ligth'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
