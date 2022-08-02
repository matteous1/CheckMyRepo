import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {
  colorPalette,
} from '../utils/styleConstants';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import services from '../services';
import selectors from '../state/app/selectors';
import action from '../state/app/actions';


import { GIT_BASE_URL, SENDER } from '../utils/constants'

import {
  Header,
  Container,
  SectionOne,
  SectionTwo,
  FooterButton,
  ErrorMessage,
  ErrorMessageBold,
  ErrorMessageContainer,
} from '../styles';

const StyledLink = styled(Link)`
  color: ${colorPalette.grey};
  cursor: pointer;
  text-decoration: none;
`;

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectors.getUser);
  const repo = useSelector(selectors.getRepo);
  const status = useSelector(selectors.getStatus);

  useEffect(() => {
    dispatch(action.setStatus(null))
  }, [dispatch])

  const sendLinkToTelegram = async () => {
    try {
      await services.pushMore({
        repoUrl: `${GIT_BASE_URL}/${user}/${repo}`,
        sender: `${SENDER}`,
      });
      navigate('/confirmation')
    } catch (e) {
      dispatch(action.setStatus('failThree'))  
      console.error(e);
    }   
  };

  const checkStatus = () => {
    if ((user && repo) && (!/\s/g.test(user) && !/\s/g.test(repo))) {
      if (navigator.onLine) {
        dispatch(action.setStatus('success'))              
      } else {
        dispatch(action.setStatus('failTwo'))     
      }
    } else {
      dispatch(action.setStatus('failOne'))
    }    
  }

  const getErrorMessage = () => {
    switch (status) {
      case 'failOne':
        return (
          <ErrorMessageContainer>
            <ErrorMessage>
              Check your <ErrorMessageBold>username</ErrorMessageBold>
            </ErrorMessage>
            <ErrorMessage>
              or your <ErrorMessageBold>repository </ErrorMessageBold>name
            </ErrorMessage>
          </ErrorMessageContainer>
        )
      case 'failTwo':
        return (
          <ErrorMessageContainer>
            <ErrorMessage>
              Check your <ErrorMessageBold> internet connection</ErrorMessageBold>
            </ErrorMessage>
          </ErrorMessageContainer>
        ) 
      case 'failThree':
        return (
          <ErrorMessageContainer>
            <ErrorMessage>
              Something went wrong! Tray again!
            </ErrorMessage>
          </ErrorMessageContainer>
        )
      default: 
        return null      
    }    
  }

  return (
    <Container status={status}>
      <SectionOne>
        <Header>
          Set the repository address
        </Header>
        <div>github.com</div>
        <div>/<StyledLink to={'/user'}>{user ? user : 'user'}</StyledLink></div>
        <div>/<StyledLink to={'/repo'}>{repo ? repo : 'repo'}</StyledLink></div>
        {
          getErrorMessage()
        }
      </SectionOne>
      <SectionTwo>
        <FooterButton
          onClick={
            status === 'success' ?
            sendLinkToTelegram :
            checkStatus
          }>
        {status === 'success' ? 'Send' : 'Check'}
      </FooterButton>
      </SectionTwo>
    </Container>
  )
}

export default Home