import PropTypes from 'prop-types'
import { Paper, Stack } from '@mui/material'

import { ActionIcon } from '@/ui'
import { PostHeader } from './PostHeader'
import s from './PostCard.module.scss'

const PostCard = ({ user, timestamp, description }) => {
  return (
    <Paper className={s.cardWrapper}>
      <PostHeader description={description} timestamp={timestamp} user={user} />
      <Stack direction="row" position="absolute" top="10px" right="10px">
        <ActionIcon icon="dots" onClick={() => console.log('clicked')} />
        <ActionIcon icon="close" onClick={() => console.log('clicked')} />
      </Stack>
    </Paper>
  )
}

PostCard.propTypes = {
  user: PropTypes.object,
  timestamp: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

PostCard.displayName = 'PostCard'

export default PostCard
