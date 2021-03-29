import { ThemeProvider } from './contexts/Theme';
import Home from './pages/Home';

export default function App () {
    return (
        <ThemeProvider mode="light">
            <Home />
        </ThemeProvider>
    );
}