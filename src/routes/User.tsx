import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import selectors from '../state/app/selectors';
import action from '../state/app/actions';

import {
  Header,
  Container,
  SectionOne,
  SectionTwo,
  FooterButton,
  Back,
  Title,
  InputContainer,
} from '../styles';

import BackIcon from '../images/back.png';

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectors.getUser)
  const [userValue, setUserValue] = useState<string>('')

  useEffect(() => {
    setUserValue(user)
  }, [user])

  return (
    <Container>
      <SectionOne>
        <Header>
          <Back
            src={BackIcon}
            alt="back"
            onClick={() => navigate('/')}
          />
          <Title>Username</Title>
        </Header>
        <InputContainer>
          <input
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
            placeholder='Type your github username'  
          />
        </InputContainer>
      </SectionOne>
      <SectionTwo>
        <FooterButton
          onClick={() => {
            dispatch(action.setUser(userValue))
            navigate('/')
          }}>
            Done
      </FooterButton>
      </SectionTwo>
    </Container>
  )
}

export default User