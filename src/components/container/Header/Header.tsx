import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import Menu from '../../Menu/Menu'
import './Header.css'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className="Title"
                        >
                            HotCoffe
                        </Typography>
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
