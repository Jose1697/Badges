import React, { Component } from 'react';

import './styles/Loader.css';

export default class MiniLoader extends Component {
  render() {
    return (
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}