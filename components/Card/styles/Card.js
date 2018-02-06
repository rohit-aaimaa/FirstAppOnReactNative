import styled from 'styled-components'

export const CardWrapper = styled.View`
  flex: 1;
  padding: 10px;
  margin: 10px;
  width: 80%;
  backgroundColor: #fff;
`

export const CardTitle = styled.View`
  flex: 0.1;
  justifyContent: center;
  alignItems: center;
`

export const CardTitleText = styled.Text`
  flex: 1;
  color: #948;
`

export const CardBody = styled.Text`
  flex: 0.8;
  backgroundColor: #970;
  padding: 10px;
  color: white;
`

export const CardFooter = styled.View`
  flex: 0.2;
  flexDirection: row;
  justifyContent: flex-end;
  alignItems: center;
`