import styled from 'styled-components';
import {
  colorPalette,
} from '../utils/styleConstants';

import services from '../services';
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
  const sendLinkToTelegram = async () => {
    console.log(navigator.onLine)
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