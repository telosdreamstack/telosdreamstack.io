export default {
  breakpoints: [],
  space: Array.from(Array(10).keys()).map(i => i * 8),
  layout: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      width: '100%',
      flex: '1 1 auto',
      alignItems: 'top',
    },
    container: {
      maxWidth: 1150,
      mx: 'auto',
      overflow: 'hidden',
      px: 1,
    },
    blogContainer: {
      maxWidth: 800,
      mx: 'auto',
      overflow: 'hidden',
    },
  },
}
