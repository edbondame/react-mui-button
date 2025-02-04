import { Stack, Button } from "@mui/material"
import SendIcon from '@mui/icons'

export const MuiButton = () => {
  return (
    <Stack spacing={2} direction = 'row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
    </Stack>
  )
}

