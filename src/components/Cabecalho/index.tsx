import ThemeSwitcher from '../ThemeSwitcher'

import { Header, HeaderInner } from './styles'

const Cabecalho = () => (
  <Header>
    <HeaderInner>
      <h1>EBAC Jobs</h1>
      <ThemeSwitcher />
    </HeaderInner>
  </Header>
)

export default Cabecalho
