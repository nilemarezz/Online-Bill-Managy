import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Paper, Container } from '@material-ui/core';
import Logo from '../components/Logo'
import FormInput from '../components/FormInput'
const queryString = require('query-string');
const Background = styled.div`
  position: absolute;
  background: ${props => props.store === "jp" ? `#b59ac4`
    : props.store === "kr" ? `#0f4c82` : `#03989e`};
  height: 100% ;
  width: 100% ; 
  top: 0 ; 
  left: 0 ;
  display: flex;
  justify-content : center;
  align-items : center;
`
const ContainerForm = styled.div`
  margin: 20px;
  margin-top : 30px;
  width : 50%;
  background-color : white;
  height : calc(100vh - 100px);
  overflow : scroll;
  @media screen and (max-width: 1024px) {
    width : 80%;
  }
  @media screen and (max-width: 414px) {
    width : 90%;
  }
`
const FormContainer = (props) => {
  const parsed = queryString.parse(props.location.search);

  return (
    <>
      <Background store={parsed.store}>
        <ContainerForm elevation={2} >
          <Logo store={parsed.store} />
          <Container style={{ paddingBottom: 10 }}>
            <FormInput store={parsed.store} />
          </Container>
        </ContainerForm>
      </Background>

    </>
  )
}

export default withRouter(FormContainer)