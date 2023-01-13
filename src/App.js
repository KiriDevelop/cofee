import React, { Fragment, Component, Provider } from 'react';
import Likes from './likes';
import Title from './title';
import Comments from './comments';
import Spin from './spin';
import { useSelector } from 'react-redux';



function App() {
  const error = useSelector(state => state.loaderReducer.error);


  return (
    <div className='container main-wrapper'>
      {error && (
        <div>
          {error}
        </div>
      )}
      <div className='loader-wrapper'>
        <Spin />
      </div>
      <Title />
      <div className='post-wrapper'>
        <Likes />
        <Comments />
      </div>
    </div>
  );
}

export default App;
