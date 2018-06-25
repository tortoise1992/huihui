import React, { Component } from 'react';
import './static/css/base.css';
class App extends Component {
  render() {
    return (
      <div className='layout'>
        <div className='layout-main'>
          <div className='layout-container'>
            内容区
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
