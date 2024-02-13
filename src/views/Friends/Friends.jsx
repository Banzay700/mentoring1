import { withLayout } from '../../hooks/withLayout'
import { Stack } from '@mui/material'
import styled from '@emotion/styled'
import { ActionIconButton } from '@/ui/index.js'
import { useToast } from '@/context/index.js'

const Main = styled(Stack)({
  width: '100%',
  height: 'calc(100vh - 54px)',
})

const FriendsPage = () => {
  const { onToast } = useToast()

  const handleSendDataToServer = () => {
    onToast('Sending data to server...', 'error')
  }

  return (
    <Main>
      <Stack gap="20px">
        <ActionIconButton onClick={handleSendDataToServer} />
      </Stack>
    </Main>
  )
}

const Friends = withLayout(FriendsPage)
export default Friends
