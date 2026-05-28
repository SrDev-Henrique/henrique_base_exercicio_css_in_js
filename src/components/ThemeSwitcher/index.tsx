import { useTema } from '../../contexts/ThemeContext'

import { BotaoTema } from './styles'

const ThemeSwitcher = () => {
  const { modo, alternarTema } = useTema()

  return (
    <BotaoTema type="button" onClick={alternarTema} aria-label="Alternar tema">
      {modo === 'claro' ? 'Modo escuro' : 'Modo claro'}
    </BotaoTema>
  )
}

export default ThemeSwitcher
