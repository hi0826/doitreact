import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    //state definition
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    // state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });

    console.log(`loading값`, this.state.loading);
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
