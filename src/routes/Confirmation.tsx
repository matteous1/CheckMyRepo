import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import action from '../state/app/actions';

import {
  Container,
  SectionOne,
  SectionTwo,
  FooterButton,
  ConfirmationContainer,
} from '../styles';

const Confirmation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container>
      <SectionOne>
        <ConfirmationContainer>
          <div>All done!</div>
          <div>Repository sent.</div>
        </ConfirmationContainer>
      </SectionOne>
      <SectionTwo>
        <FooterButton
          onClick={() => {
            dispatch(action.setUser(''))
            dispatch(action.setRepo(''))
            dispatch(action.setStatus(null))
            navigate('/')
          }}>
            Cool
      </FooterButton>
      </SectionTwo>
    </Container>
  )
}

export default Confirmation