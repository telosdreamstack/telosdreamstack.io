<p align="center">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
  <a href="https://developers.blockmatic.io">
		<img src="https://img.shields.io/badge/code%20style-blockmatic-brightgreen.svg" alt="Blockmatic Standard">
	</a>
	<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT" />
	<a href="https://twitter.com/intent/follow?screen_name=telosdreamstack">
		<img src="https://img.shields.io/twitter/follow/telosdreamstack.svg?style=social&logo=twitter" alt="Follow on Twitter" />
	</a>
	<a href="https://t.me/telosdreamstack">
		<img src="https://img.shields.io/badge/-Chat%20on%20Telegram-blue?style=social&logo=telegram" alt="Chat on Telegram">
	</a>
</p>

# TELOS DreamStack Website

TELOS DreamStack Project which provides set of guidelines, tools and starters to speed up dApp development while following best practices for security, performance and maintainability of your application. 

## Website File Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## Credits

https://www.gatsbyjs.org/starters/smakosh/gatsby-portfolio-dev/
