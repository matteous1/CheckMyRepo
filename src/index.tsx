import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './styles';

import App from './App';

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Wrapper>
        <App />
      </Wrapper>
    </Router>
  </Provider>,
  document.querySelector('#root')
)
