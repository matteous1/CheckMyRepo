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
        <InputContainer>
          <input
            value={repoValue}
            onChange={(e) => setRepoValue(e.target.value)}
            placeholder='Type your repository name'  
          />
        </InputContainer>
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