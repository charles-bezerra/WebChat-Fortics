import { useContext } from 'react';
import { ContextApp } from '../contexts/App';

export default function useApp() {
    const context = useContext(ContextApp);

    if(!context) {
        throw new Error('Component not parent of AppProvider component');
    }

    return context;
}