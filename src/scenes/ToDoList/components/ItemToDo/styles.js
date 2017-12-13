const gray = 'rgba(74, 72, 72, 0.54)'
const opacity = '.6'

export default (theme) => ({
  rootDone: {
    opacity
  },
  listIconDone: {
    opacity,
    color: gray
  },
  container: {
    flex: '1 1 auto',
    padding: '0 16px'
  },
  title: {
    color: 'rgba(37, 31, 31, 0.8)'
  },
  category: {
    color: gray,
    fontSize: '0.815rem'
  },
  todoDone: {
    color: gray,
    textDecoration: 'line-through'
  }
})
