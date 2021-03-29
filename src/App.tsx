import { ThemeProvider } from './contexts/Theme';
import { AppProvider } from './contexts/App';
import Home from './pages/Home';

export default function App () {
    return (
        <ThemeProvider mode="light">
            <AppProvider>
                <Home />
            </AppProvider>
        </ThemeProvider>
    );
}