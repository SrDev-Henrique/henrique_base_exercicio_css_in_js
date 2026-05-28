import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { ModoTema, temaClaro, temaEscuro, Theme } from '../styles/theme'

const STORAGE_KEY = 'ebac-jobs-tema'

type ThemeContextValue = {
  modo: ModoTema
  alternarTema: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.texto};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`

const obterTemaInicial = (): Theme => {
  const salvo = localStorage.getItem(STORAGE_KEY) as ModoTema | null
  return salvo === 'escuro' ? temaEscuro : temaClaro
}

type Props = {
  children: ReactNode
}

export const AppThemeProvider = ({ children }: Props) => {
  const [tema, setTema] = useState<Theme>(obterTemaInicial)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, tema.modo)
  }, [tema.modo])

  const alternarTema = useCallback(() => {
    setTema((atual) => (atual.modo === 'claro' ? temaEscuro : temaClaro))
  }, [])

  const valor = useMemo(
    () => ({ modo: tema.modo, alternarTema }),
    [tema.modo, alternarTema]
  )

  return (
    <ThemeContext.Provider value={valor}>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTema = () => {
  const contexto = useContext(ThemeContext)
  if (!contexto) {
    throw new Error('useTema deve ser usado dentro de AppThemeProvider')
  }
  return contexto
}
