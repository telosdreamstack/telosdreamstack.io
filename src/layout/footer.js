/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'

const Footer = () => (
  <Flex
    sx={theme => ({
      borderBottom: `5px solid ${theme.colors.primary}`,
      height: 50,
      alignItems: 'center',
      overflow: 'hidden',
      marginTop: 50,
    })}
  >
    <div sx={{ variant: 'layout.container' }}>
      Made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>
      by{' '}
      <Styled.a
        href="https://blockmatic.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blockmatic
      </Styled.a>
    </div>
  </Flex>
)

export default Footer
