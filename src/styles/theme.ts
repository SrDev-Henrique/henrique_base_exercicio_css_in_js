export type ModoTema = 'claro' | 'escuro'

export type Theme = {
  modo: ModoTema
  cores: {
    principal: string
    secundaria: string
    fundo: string
    texto: string
  }
}

export const temaClaro: Theme = {
  modo: 'claro',
  cores: {
    principal: '#a7727d',
    secundaria: '#f9f5e7',
    fundo: '#ffffff',
    texto: '#333333'
  }
}

export const temaEscuro: Theme = {
  modo: 'escuro',
  cores: {
    principal: '#d4a5b0',
    secundaria: '#2a2224',
    fundo: '#1a1416',
    texto: '#f9f5e7'
  }
}
