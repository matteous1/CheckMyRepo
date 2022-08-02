import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import action from '../state/app/actions';

import Footer from '../component/Footer';

import {
  Container,
  SectionOne,
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
      <Footer
        value='Done'
        onClick={() => {
          dispatch(action.setDefaultState())
          navigate('/')
        }}
      />
    </Container>
  )
}

export default Confirmation