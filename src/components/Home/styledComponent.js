import styled from 'styled-components'

export const HomePage = styled.div`
  padding: 10px;
`

export const Nav = styled.nav``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
`

export const MainHeading = styled.h1`
  color: #334155;
`

export const RegisterSentence = styled.p`
  color: #475569;
`

export const RegisterBtn = styled.button`
  background-color: #3b82f6;
  color: white;
  border-width: 0px;
  padding: 5px;
  border-radius: 5px;
  height: 30px;
  width: 90px;
  cursor: pointer;
`
export const ResultHeading = styled(MainHeading)`
  color: #2563eb;
`
export const ResultSentence = styled(RegisterSentence)`
  color: #334155;
  font-size: 30px;
`
