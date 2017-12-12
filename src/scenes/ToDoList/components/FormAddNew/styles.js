export default (theme) => ({
  root: {
    marginTop: theme.spacing.unit * 2
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
  formLabel: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2
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
