import Button from '@mui/material/Button'
import './Menu.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit" className="Title-menu">
                Home
            </Button>
            <Button color="inherit" className="Title-menu">
                Articles
            </Button>
            <Button color="inherit" className="Title-menu">
                {' '}
                Login
            </Button>
            <Button>
                <InstagramIcon className="Icon" />
            </Button>
            <Button>
                <TwitterIcon className="Icon" />
            </Button>
            <Button>
                <LinkedInIcon className="Icon" />
            </Button>
        </>
    )
}

export default Menu
