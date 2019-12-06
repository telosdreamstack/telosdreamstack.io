import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<a href="https://docs.telosdreamstack.io" target="_blank">Documentation</a>
		<a href="https://telosfoundation.io" target="_blank">Foundation</a>
	</Wrapper>
)

export default NavbarLinks
