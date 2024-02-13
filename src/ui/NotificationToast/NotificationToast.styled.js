import styled from '@emotion/styled'
import { Stack } from '@mui/material'

export const ToastWrapper = styled(Stack)({
  padding: '14px 25px 14px 14px',
  width: '320px',
  position: 'relative',
  borderRadius: '4px',
  boxShadow:
    '0px 8px 48px 0px rgba(15, 28, 49, 0.06), 0px 4px 24px 0px rgba(15, 28, 49, 0.04), 0px 2px 12px 0px rgba(15, 28, 49, 0.04), 0px 1px 4px 0px rgba(15, 28, 49, 0.06)',
})

export const IconWrapper = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: '8px',
  right: '8px',
  cursor: 'pointer',
  color: theme.palette.background.greyIcon,
  transition: 'color 0.25s ease',
  '&:hover': {
    color: theme.palette.background.selectIcon,
  },
}))

export const ToastContentWrapper = styled(Stack)(({ color, theme }) => ({
  gap: '12px',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  color: theme.palette.background[color],
}))

export const ToastContainer = styled(Stack)({
  position: 'fixed',
  left: '12px',
  bottom: '20px',
  zIndex: 1250,
  padding: 2,
  gap: '10px',
})
