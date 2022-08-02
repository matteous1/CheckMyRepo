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

const Repo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const repo = useSelector(selectors.getRepo)
  const [repoValue, setRepoValue] = useState<string>('')

  useEffect(() => {
    setRepoValue(repo)
  }, [repo])

  return (
    <Container>
      <SectionOne>
        <Header 
          text='REPOSITORY'
          hasBackButton
        />
        <Input
          value={repoValue}
          onChange={setRepoValue}
          placeholder='Type your repository name'  
        />
      </SectionOne>
      <Footer
        value='Done'
        onClick={() => {
          dispatch(action.setRepo(repoValue))
          navigate('/')
        }}
      />
    </Container>
  )
}

export default Repo