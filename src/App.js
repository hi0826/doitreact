import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';
import PropComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import Counter from './03/Counter';
import LifecycleExample from './03/LifecycleExample';
import NewCounter from './03/NewCounter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }
  render() {
    return (
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <NewCounter count={this.state.count} />
        </div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </div>
    );
  }
}

export default App;
