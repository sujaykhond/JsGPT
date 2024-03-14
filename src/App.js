import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { darkThemeColors, lightThemeColors } from './components/Tools/theme';
import { useSelector } from 'react-redux';
import PopupContainer from './components/Popups';

function App() {
    const { darkTheme } = useSelector((state) => state.themeReducer);

    return (
        <div className="app">
            <ThemeProvider theme={darkTheme ? darkThemeColors : lightThemeColors}>
                <Home />
                <PopupContainer />
            </ThemeProvider>
        </div>
    );
}

export default App;
