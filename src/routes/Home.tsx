import services from '../services';
import { Header, Link } from '../styles';

const Home = () => {
  const sendLinkToTelegram = async () => {
    try {
      await services.pushMore({
        repoUrl: 'https://github.com/matteous1/CheckMyRepo',
        sender: 'Matteo',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header>
        Set the repository address
      </Header>
      <div>github.com</div>
      <div>/<Link>User</Link></div>
      <div>/<Link>Repo</Link></div>
      <button onClick={sendLinkToTelegram}>Call api</button>
    </>
  )
}

export default Home