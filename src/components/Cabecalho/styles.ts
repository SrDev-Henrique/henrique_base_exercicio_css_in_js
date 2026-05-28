import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.cores.secundaria};
  color: ${({ theme }) => theme.cores.principal};
  padding: 24px 0;
`

export const HeaderInner = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
