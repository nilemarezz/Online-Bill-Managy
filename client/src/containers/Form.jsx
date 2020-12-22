import { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Button } from '@material-ui/core';
import Logo from '../components/Logo'
import FormInput from '../components/FormInput'
import ConfirmModal from '../components/ConfirmModal'
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

const FormContainer = (props) => {
  const parsed = queryString.parse(props.location.search);
  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState(null)

  const submitForm = () => {
    if (props.formData.rawImage) {
      props.submitFormData()
      props.history.push(`/summary?store=${parsed.store}`)

    } else {
      handleClose()
      setError('* Please upload the payment slip')
    }
  }
  const openConfirmModal = (data) => {
    setOpenModal(true)
    props.onSetFormData(data)
  }
  const handleClose = () => {
    setOpenModal(false)
    props.onSetFormData(null)
  }
  if (parsed.store === "cn" || parsed.store === "jp" || parsed.store === "kr") {
    return (
      <>
        <Background store={parsed.store}>

          <ContainerForm elevation={2} height="calc(100vh - 100px)">
            <Logo store={parsed.store} />
            <Container style={{ paddingBottom: 10 }}>
              <FormInput store={parsed.store} openConfirmModal={openConfirmModal} error={error} closeError={() => setError(null)} />
            </Container>
          </ContainerForm>

        </Background>
        <ConfirmModal open={openModal} handleClose={handleClose} submitForm={submitForm} />
      </>
    )
  } else {
    return <Redirect to="/error" />
  }
}

export default withRouter(FormContainer)