import CssBaseline from '@mui/material/CssBaseline'
import Header from '../Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Slider from '../Slider/Slider'
import Main from '../Main/Main'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Slider />
            <Main />
        </StyledEngineProvider>
    )
}
export default App
