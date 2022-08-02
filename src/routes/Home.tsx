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

import Header from '../component/Header';
import Footer from '../component/Footer';
import Error from '../component/Error';

import { GIT_BASE_URL, SENDER } from '../utils/constants'

import {
  Container,
  SectionOne,
} from '../styles';

const StyledLink = styled(Link)`
  color: ${colorPalette.grey};
  cursor: pointer;
  text-decoration: none;
`;

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectors.getUser)
  const repo = useSelector(selectors.getRepo)
  const status = useSelector(selectors.getStatus)

  useEffect(() => {
    dispatch(action.setStatus(0))
  }, [dispatch])

  const sendLinkToTelegram = async () => {
    try {
      await services.pushMore({
        repoUrl: `${GIT_BASE_URL}/${user}/${repo}`,
        sender: `${SENDER}`,
      });
      navigate('/confirmation')
    } catch (e) {
      dispatch(action.setStatus(3))  
      console.error(e);
    }   
  };

  const checkStatus = () => {
    if ((user && repo) && (!/\s/g.test(user) && !/\s/g.test(repo))) {
      if (navigator.onLine) {
        dispatch(action.setStatus(4))              
      } else {
        dispatch(action.setStatus(2))     
      }
    } else {
      dispatch(action.setStatus(1))
    }    
  }

  return (
    <Container status={status}>
      <SectionOne>
        <Header 
          text='Set the repository address'
        />
        <div>github.com</div>
        <div>/<StyledLink to={'/user'}>{user ? user : 'user'}</StyledLink></div>
        <div>/<StyledLink to={'/repo'}>{repo ? repo : 'repo'}</StyledLink></div>
        <Error status={status} />
      </SectionOne>
      <Footer
        value={status === 4 ? 'Send' : 'Check'}
        onClick={
          status === 4 ?
          sendLinkToTelegram :
          checkStatus
        }
      />
    </Container>
  )
}

export default Home