import CssBaseline from '@mui/material/CssBaseline'
import Header from '../Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Slider from '../Slider/Slider'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Slider />
        </StyledEngineProvider>
    )
}
export default App
