import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.cores.principal};
  background-color: ${({ theme }) => theme.cores.fundo};
  color: ${({ theme }) => theme.cores.texto};
  border: 1px solid ${({ theme }) => theme.cores.principal};
`

export const BotaoPesquisar = styled.button`
  background-color: ${({ theme }) => theme.cores.principal};
  border: 1px solid ${({ theme }) => theme.cores.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.cores.secundaria};
  margin-left: 8px;
  cursor: pointer;
`
