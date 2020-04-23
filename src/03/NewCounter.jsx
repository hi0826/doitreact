import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      //프로퍼티에서 전달된 count값을 보관
      count,
      newCount:
        count === state.count
          ? // 프로퍼티 변경이 안됐다면 기존 state
            state.newCount
          : // 프로퍼티 변경이 됐다면 변경된 프로퍼티 값으로 설정
            count,
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
