import 'styled-components'
import type { ModoTema, Theme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    modo: ModoTema
    cores: Theme['cores']
  }
}
