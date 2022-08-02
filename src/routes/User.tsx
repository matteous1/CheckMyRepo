import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import selectors from '../state/app/selectors';
import action from '../state/app/actions';

import Input from '../component/Input';
import Header from '../component/Header';
import Footer from '../component/Footer';

import {
  Container,
  SectionOne,
} from '../styles';

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
        <Header 
          text='USERNAME'
          hasBackButton
        />
        <Input
          value={userValue}
          onChange={setUserValue}
          placeholder='Type your github username'  
        />
      </SectionOne>
      <Footer
        value='Done'
        onClick={() => {
          dispatch(action.setUser(userValue))
          navigate('/')
        }}
      />
    </Container>
  )
}

export default User