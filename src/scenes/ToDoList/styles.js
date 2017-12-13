export default (theme) => ({
  contentWrapper: {
    width: '100%'
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
  btnContainer: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  }
})
