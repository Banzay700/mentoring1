import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

import { iconsMap } from './ActionIcon.utils.jsx'
import s from './ActionIcon.module.scss'

const ActionIcon = ({ icon, onClick }) => {
  return (
    <Box className={s.iconWrapper} onClick={onClick}>
      {iconsMap[icon]}
    </Box>
  )
}

ActionIcon.propTypes = {
  icon: PropTypes.oneOf(['dots', 'close']).isRequired,
  onClick: PropTypes.func.isRequired,
}

ActionIcon.displayName = 'ActionIcon'

export default ActionIcon
