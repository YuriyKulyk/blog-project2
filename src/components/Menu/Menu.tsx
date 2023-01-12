import Button from '@mui/material/Button'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit" className="menu-bar">
                Home
            </Button>
            <Button color="inherit" className="menu-bar">
                Articles
            </Button>
            <Button color="inherit" className="menu-bar">
                {' '}
                Login
            </Button>
        </>
    )
}
export default Menu
