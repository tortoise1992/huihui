import React, { Component } from 'react';
import './static/css/base.css';
import Header from './component/Header/Header'
class App extends Component {
  render() {
    return (
      <div className='layout'>
        <div className='layout-main'>
          <div className='layout-container'>
            <Header></Header>
          </div>
        </div>
        <div className='layout-sticky'>
          sticky布局
        </div>
      </div>
    );
  }
}
export default App;
