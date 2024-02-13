import PropTypes from 'prop-types'
import { CgClose } from 'react-icons/cg'
import { Typography } from '@mui/material'

import { notificationIconsMap } from './NotificationToast.utils'
import {
  IconWrapper,
  ToastContentWrapper,
  ToastWrapper,
} from './NotificationToast.styled'
import Box from '@mui/material/Box'

const NotificationToast = ({ type, message, onRemove }) => {
  return (
    <ToastWrapper>
      <ToastContentWrapper color={type}>
        <Box minWidth="22px">{notificationIconsMap[type]}</Box>
        <Typography fontSize="16px">{message}</Typography>
      </ToastContentWrapper>
      <IconWrapper onClick={onRemove}>
        <CgClose size="22px" color="inherit" />
      </IconWrapper>
    </ToastWrapper>
  )
}

NotificationToast.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  message: PropTypes.string,
  onRemove: PropTypes.func,
}

NotificationToast.displayName = 'NotificationToast'

export default NotificationToast
