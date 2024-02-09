import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import s from './PostHeader.module.scss'

const PostHeader = () => {
  return <Box className={s.wrapper}>PostHeader</Box>
}

PostHeader.propTypes = {
  user: PropTypes.object,
  timestamp: PropTypes.string,
  description: PropTypes.string,
}

PostHeader.displayName = 'PostHeader'

export default PostHeader
