import { createContext, useContext, useState } from "react"

// Criando o contexto
const GlobalContext = createContext()

// Criando o Provider
export const GlobalProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    const [tema, setTema] = useState("light")
    const [almasChefes, setAlmasChefes] = useState(0)
    const [almasNormais, setAlmasNormais] = useState(0)
    return (
        <GlobalContext.Provider value={{ usuario, setUsuario, tema, setTema,almasNormais, setAlmasNormais, almasChefes, setAlmasChefes }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Hook personalizado para facilitar o uso do contexto
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
