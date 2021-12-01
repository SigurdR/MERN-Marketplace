import React from 'react';
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { hot } from 'react-hot-loader';

// Once the code that's been rendered on the server-side reaches the browser
// and the frontend script takes over, the server-side injected CSS is needed
// to be removed when the root React components mounts, using the useEffect
// hook

const App = () => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }, [])
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default hot(module)(App);