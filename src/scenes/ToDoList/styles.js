export default (theme) => ({
  contentWrapper: {
    width: '100%'
  },
  root: {
    width: '100%',
    background: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 3
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
  addButton: {
    position: 'absolute',
    top: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  },
  btnContainer: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  }
})
