import styled from 'styled-components'

export const CardWrapper = styled.View`
  flex: 1;
  padding: 10px;
  margin: 10px;
  width: 80%;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 2;
`

export const CardTitle = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
`

export const CardTitleText = styled.Text`
  flex: 1;
  color: #948;
`

export const CardBody = styled.Text`
  flex: 0.8;
  width: 200px;
  background-color: #970;
  padding: 10px;
  color: white;
`

export const CardFooter = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
