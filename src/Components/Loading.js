import React from 'react'
import PropTypes from 'prop-types'
// used to make sure the data you receive is valid
import { withStyles } from '@material-ui/core/styles'
// used to give the app goos locking and give me a large of styles for designing
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
})

const Loading = ({
  classes

}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgress
        color='secondary'
        className={classes.progress}
      />
    </div>
  )
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)
