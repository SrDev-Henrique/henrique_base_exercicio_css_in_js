# EBAC Jobs

Aplicação de listagem de vagas de emprego desenvolvida como exercício do curso EBAC. O projeto demonstra o uso de **Styled Components** para estilização em React, com suporte a **tema claro e escuro**.

## Sobre o projeto

O EBAC Jobs exibe vagas para áreas de tecnologia, design e artes visuais. A interface inclui:

- **Cabeçalho** com título e alternância de tema
- **Hero** com imagem de fundo e overlay
- **Formulário de busca** para filtrar vagas por título
- **Lista de vagas** em grid responsivo
- **Cards de vaga** com detalhes e efeito hover

A estilização foi migrada de CSS Modules para Styled Components, conforme o material de apoio do curso.

## Tecnologias

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/) 5
- [Create React App](https://create-react-app.dev/)

## Funcionalidades

### Estilização com Styled Components

Cada componente estilizado possui um arquivo `styles.ts` com os elementos criados via `styled`, por exemplo `styled.header`, `styled.form` e `styled.li`. As cores vêm do tema ativo através de `props.theme`.

### Tema claro e escuro

O projeto oferece dois temas definidos em [`src/styles/theme.ts`](src/styles/theme.ts):

| Propriedade   | Uso                                      |
| ------------- | ---------------------------------------- |
| `principal`   | Destaques, bordas, botões                |
| `secundaria`  | Fundos de cards, cabeçalho e formulário  |
| `fundo`       | Cor de fundo da página                   |
| `texto`       | Texto padrão e campos de input           |

O [`ThemeContext`](src/contexts/ThemeContext.tsx) gerencia o tema ativo, aplica estilos globais no `body` e persiste a preferência do usuário em `localStorage` (`ebac-jobs-tema`).

O botão **Modo escuro** / **Modo claro** no cabeçalho alterna entre os temas.

### Busca de vagas

O formulário filtra as vagas pelo título (case-insensitive). Os dados são mockados em [`src/containers/ListaVagas/index.tsx`](src/containers/ListaVagas/index.tsx).

## Estrutura do projeto

```
src/
├── components/
│   ├── Cabecalho/      # Cabeçalho + theme switcher
│   ├── Hero/           # Banner principal
│   ├── FormVagas/      # Formulário de pesquisa
│   ├── Vaga/           # Card individual de vaga
│   └── ThemeSwitcher/  # Botão de alternância de tema
├── containers/
│   └── ListaVagas/     # Lista, filtro e composição das vagas
├── contexts/
│   └── ThemeContext.tsx
├── styles/
│   ├── theme.ts        # Definição dos temas
│   └── styled.d.ts     # Tipagem do DefaultTheme
├── global.css          # Reset CSS e classe .container
├── App.tsx
└── index.tsx
```

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org/) (versão LTS recomendada).

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:3000)
npm start

# Build de produção
npm run build

# Testes
npm test
```

## Paleta de cores (tema claro)

| Nome        | Hex       |
| ----------- | --------- |
| Principal   | `#a7727d` |
| Secundária  | `#f9f5e7` |
| Fundo       | `#ffffff` |
| Texto       | `#333333` |

O tema escuro utiliza tons mais escuros de fundo, mantendo a identidade visual em rosa/bege.

## Tipagem do tema

O arquivo [`src/styles/styled.d.ts`](src/styles/styled.d.ts) estende o `DefaultTheme` do Styled Components para que `theme.cores` e `theme.modo` tenham autocomplete no TypeScript.

## Licença

Projeto educacional — curso EBAC.
