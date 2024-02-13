import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import uuid4 from 'uuid4'

import { NotificationToast } from '@/ui'
import { TOASTS_DURATION } from '@/utils'
import { ToastContainer } from '@/ui/NotificationToast'

export const ToastContext = createContext(null)

export let toastMessage = () => {}

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const onRemove = (removeId) => {
    setToasts((toasts) => toasts?.filter(({ id }) => id !== removeId))
  }

  const onToast = (message, type = 'info', duration = TOASTS_DURATION) => {
    const id = uuid4()

    const toast = {
      id,
      message,
      type,
    }

    setToasts((toasts) => [...toasts, toast])

    setTimeout(() => onRemove(id), duration)
  }

  toastMessage = onToast

  const value = {
    onToast,
    onRemove,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer>
        {toasts.map(({ id, message, type }) => (
          <NotificationToast
            key={id}
            type={type}
            message={message}
            onRemove={() => onRemove(id)}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  return useContext(ToastContext)
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ToastProvider
