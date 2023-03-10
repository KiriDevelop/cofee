import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { spamFilter } from './redux/middleware'; 


//compose - позволяет объединить middleware и reactdevtools

//создаем харанилище стэйтов - стор
const store = createStore(rootReducer, compose(
      applyMiddleware(
            thunk,
            spamFilter
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            <App />
      </Provider>
  
);

reportWebVitals();
