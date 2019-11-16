import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
        The TELOS DreamStack Project provides set of principles, guidelines, tools, packages and starters to jumpstart and speed up dApp development following best practices for security, performance and maintainability of your application.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
