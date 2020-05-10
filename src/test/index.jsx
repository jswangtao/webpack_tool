import React, { Component } from 'react';
import { history } from 'wmkit';

export default class main extends Component {
  render() {
    return (
      <div>
        <button onClick={() => { history.push('/'); }}>测试</button>
      </div>
    );
  }
}
