import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>TELOS DreamStack</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Made with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					by{' '}
					<a
						href="https://blockmatic.io"
						rel="noopener noreferrer"
						target="_blank"
					>
						Blockmatic
					</a>
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
						style={{
							marginLeft: 20,
							display: 'inline-block'
						}}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
