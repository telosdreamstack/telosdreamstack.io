export default {
  button: {
    default: {
      bg: 'transparent',
      borderColor: 'primary',
      borderRadius: 'button',
      borderWidth: 2,
      color: 'primary',
      cursor: 'pointer',
      fontFamily: 'button',
      fontSize: 'button',
      fontWeight: 'bold',
      p: 2,
      transition: 'all 0.5s ease',

      '&:hover': {
        bg: 'primary',
        color: 'textContrast',
      },

      '&:disabled': {
        bg: 'muted',
        borderColor: 'muted',
        color: 'textContrast',
        pointerEvents: 'none',
      },
    },
  },
}
