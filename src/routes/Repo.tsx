import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import selectors from '../state/app/selectors';
import action from '../state/app/actions';

import Input from '../component/Input';

import {
  Header,
  Container,
  SectionOne,
  SectionTwo,
  FooterButton,
  Back,
  Title,
} from '../styles';

import BackIcon from '../images/back.png';

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
        <Header>
          <Back
            src={BackIcon}
            alt="back"
            onClick={() => navigate('/')}
          />
          <Title>Repository</Title>
        </Header>
        <Input
          value={repoValue}
          onChange={setRepoValue}
          placeholder='Type your repository name'  
        />
      </SectionOne>
      <SectionTwo>
        <FooterButton
          onClick={() => {
            dispatch(action.setRepo(repoValue))
            navigate('/')
          }}>
            Done
      </FooterButton>
      </SectionTwo>
    </Container>
  )
}

export default Repo