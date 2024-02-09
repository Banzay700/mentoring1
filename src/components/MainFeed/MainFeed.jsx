import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'

import { PostCard } from '@/ui'
import s from './MainFeed.module.scss'

const MainFeed = () => {
  const { palette } = useTheme()

  return (
    <Box bgcolor={palette.background.secondary} className={s.container}>
      <PostCard />
    </Box>
  )
}

MainFeed.displayName = 'MainFeed'

export default MainFeed
