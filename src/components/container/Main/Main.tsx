import { Container } from '@mui/material'
import Home from '../../../pages/Home/Home'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                padding: '80px 0',
            }}
            component="main"
        >
            <Home />
        </Container>
    )
}
export default Main
