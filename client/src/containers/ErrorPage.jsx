import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core';
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
const ErrorPage = (props) => {
  const parsed = queryString.parse(props.location.search);
  return (
    <Background store={parsed.store}>
      <div style={{ backgroundColor: 'white', flexDirection: 'column', width: 300, height: 300, display: 'flex', justifyContent: 'center', paddingLeft: 30 }}>
        <Typography variant="h2">404</Typography>
        <Typography variant="h4">Page not found</Typography>

        <div style={{ display: 'flex', flexDirection: 'row', margin: 5, marginTop: 15 }}>
          <img src={process.env.PUBLIC_URL + `/images/logo-jp.jpg`} alt="logo" width={25} height={25} />
          <Typography variant="body1" style={{ marginLeft: 10 }}>@catchy_jp</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 5 }}>
          <img src={process.env.PUBLIC_URL + `/images/logo-kr.jpg`} alt="logo" width={25} height={25} />
          <Typography variant="body1" style={{ marginLeft: 10 }}>@catchyshoppp</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 5 }}>
          <img src={process.env.PUBLIC_URL + `/images/logo-cn.jpg`} alt="logo" width={25} height={25} />
          <Typography variant="body1" style={{ marginLeft: 10 }}>@brbrittyStore</Typography>
        </div>

      </div>
    </Background>
  )
}

export default withRouter(ErrorPage)