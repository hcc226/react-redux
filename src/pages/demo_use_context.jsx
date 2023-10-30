import { createContext, useContext, useState } from "react";
import './demo_use_context.css'
const ThemeContext = createContext('dark')

export default function UseCtxDemo() {
    const [theme, setTheme] = useState('light')

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Form></Form>
            </ThemeContext.Provider>
            <Button onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}>aaa</Button>
        </>
    )
}

function Form({children}) {
    return (
        <Panel title="Welcome">
            <Button>sign up</Button>
            <Button>login</Button>
        </Panel>
    )
}

function Panel({title, children}) {
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }