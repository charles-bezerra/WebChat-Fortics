import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';

const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error("This components is not parent of the ThemeProvider");
    }

    return context;
}

export default useTheme;