import React from 'react'
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
        <h1>A fullstack EOSIO framework</h1>
        <p>
        The TELOS DreamStack Project provides set of principles, guidelines, tools, packages and starters to jumpstart and speed up dApp development following best practices for security, performance and maintainability of your application.
        </p>
        <a href="https://docs.telosdreamstack.io" target="_blank">
          <Button>Get Started</Button>
        </a>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
