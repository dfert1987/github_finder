import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialState = null;

    const [state, dispacth] = useReducer(AlertReducer, initialState);

    return (
        <AlertContext.Provider value={{ alert: state }}>
            {children}
        </AlertContext.Provider>
    );
};
