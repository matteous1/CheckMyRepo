import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './styles';

import App from './App';

ReactDOM.render(
  <Router>
    <Wrapper>
      <App />
    </Wrapper>
  </Router>,
  document.querySelector('#root')
)
