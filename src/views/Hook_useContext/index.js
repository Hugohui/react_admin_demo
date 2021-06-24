import { useContext, createContext } from "react"

/**
 * Hook useContext
 */
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}


const ThemeContext = createContext(themes)


function HookContext() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}


function Toolbar() {
    return (
        <ThemeButton />
    )
}


function ThemeButton() {
    const theme = useContext(ThemeContext)
    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            I am  styled by style theme!
        </button>
    )
}

export default HookContext