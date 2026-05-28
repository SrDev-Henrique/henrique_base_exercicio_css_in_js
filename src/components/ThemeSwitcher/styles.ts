import styled from 'styled-components'

export const BotaoTema = styled.button`
  background-color: ${({ theme }) => theme.cores.principal};
  color: ${({ theme }) => theme.cores.secundaria};
  border: 1px solid ${({ theme }) => theme.cores.principal};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`
