import DateNow from '../components/DateNow'
import Logo from '../components/Logo'
import styled from 'styled-components'
import { Paper, Container, Button, Typography } from '@material-ui/core';
import Summary from '../containers/Summary'
import { withRouter, Redirect } from 'react-router-dom'
const queryString = require('query-string');
const Background = styled.div`
  position: fixed;
  background: ${props => props.store === "jp" ? `#b59ac4`
    : props.store === "kr" ? `#0f4c82` : `#03989e`};
  height: 100% ;
  width: 100% ; 
  top: 0 ; 
  left: 0 ;
  display: flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`
const BackButton = styled(Button)`
  background-color: #f84214; 
  color: white;  
  width: 40% ; 
  @media screen and (max-width: 1024px) {
    width : 80%;
  }
  @media screen and (max-width: 414px) {
    width : 90%;
  }
  margin-top : 20px;
  
`
const ContainerForm = styled.div`
margin: 20px;
margin-top : 30px;
width : 40%;
background-color : white;
height : calc(100vh - 190px);
overflow : scroll;
position : relative;
@media screen and (max-width: 1024px) {
  height : ${props => props.height};
  width : 80%;
}
@media screen and (max-width: 414px) {
  height : ${props => props.height};
  width : 90%;
}
`
const Bill = (props) => {
  const parsed = queryString.parse(props.location.search);
  if (parsed.store === "cn" || parsed.store === "jp" || parsed.store === "kr") {


    return (
      <Background store={parsed.store}>

        <ContainerForm elevation={2} height="calc(100vh - 260px)">
          <DateNow />
          <Logo store={parsed.store} />
          <Container style={{ paddingBottom: 10 }}>
            <Summary formData={props.formData} />
          </Container>

        </ContainerForm>
        <div style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'flex-start' }}>
          <Typography variant="caption" style={{ lineHeight: 0, }}>* กรุณาแคปหน้าจอแล้วส่งให้ร้านค้า</Typography>
        </div>
        <BackButton fullWidth onClick={() => props.history.push(`/form?store=${parsed.store}`)}>Back</BackButton>

      </Background>
    )
  } else {
    return <Redirect to="/error" />
  }
}
export default withRouter(Bill)