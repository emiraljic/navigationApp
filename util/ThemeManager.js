import React from 'react';

//use of context 
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    // theme = light or dark
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}