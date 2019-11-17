import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/telosdreamstack-logo.jpg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>The TELOS DreamStack</h1>
				<h4>Jumpstart dApp development following best practices and conventions.</h4>
				<Button as={AnchorLink} href="#contact">
					Get Started
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Telos DreamStack" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
