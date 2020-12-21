import { Typography } from '@material-ui/core';
import styled from 'styled-components'

const Container = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  margin-top : 20px;
  align-items : center;
`

const Logo = (props) => {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + `/images/logo-${props.store}.jpg`} alt="logo" width={50} width={50} height={50} />
      <Typography variant="body1" style={{ marginTop: 10 }}>
        {props.store === "cn" ? "Brbritty" : `CATCHY ${props.store.toUpperCase()}`}
      </Typography>
    </Container>
  )
}

export default Logo