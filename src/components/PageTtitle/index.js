import React from 'react'
import { Typography } from 'material-ui'

const PageTitle = ({ title, ...props }) => (
  <Typography type={'display2'} gutterBottom {...props}>
    {title}
  </Typography>
)

export default PageTitle
