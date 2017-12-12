export default (theme) => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper
  },
  textField: {
    display: 'flex'
  },
  group: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: `${theme.spacing.unit}px 0`
  },
  button: {
    marginRight: theme.spacing.unit * 2
  },
  btnContainer: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  }
})
