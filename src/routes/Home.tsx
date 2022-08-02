import styled from 'styled-components';
import {
  colorPalette,
} from '../utils/styleConstants';
import { useSelector, useDispatch } from 'react-redux';

import services from '../services';
import selectors from '../state/app/selectors';
import action from '../state/app/actions';


import { GIT_BASE_URL, SENDER } from '../utils/constants'
import {
  Header,
  Container,
  SectionOne,
  SectionTwo,
} from '../styles';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: ${colorPalette.grey};
  cursor: pointer;
  text-decoration: none;
`;

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectors.getUser);
  const repo = useSelector(selectors.getRepo);

  const sendLinkToTelegram = async () => {
    if (!/\s/g.test(user) && !/\s/g.test(repo)) {
      if (navigator.onLine) {
        try {
          const { data } = await services.pushMore({
            repoUrl: `${GIT_BASE_URL}/${user}/${repo}`,
            sender: `${SENDER}`,
          });
          console.log(data)
        } catch (e) {
          console.error(e);
        }        
      } else {
        dispatch(action.setStatus('fail'))
        dispatch(action.setStatusError('Check your internet connection'))        
      }
    } else {
      dispatch(action.setStatus('fail'))
      dispatch(action.setStatusError('Check your username or your repository name'))
    }
    // console.log(navigator.onLine)
    // try {
    //   await services.pushMore({
    //     repoUrl: 'https://github.com/matteous1/CheckMyRepo',
    //     sender: 'Matteo',
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <Container>
      <SectionOne>
        <Header>
          Set the repository address
        </Header>
        <div>github.com</div>
        <div>/<StyledLink to={'/user'}>user</StyledLink></div>
        <div>/<StyledLink to={'/repo'}>repo</StyledLink></div>
      </SectionOne>
      <SectionTwo>
        <button onClick={sendLinkToTelegram}>Call api</button>
      </SectionTwo>
    </Container>
  )
}

export default Home