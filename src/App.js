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
import TodaysPlanApp from './03/TodaysPlanApp';
import SFCTodaysPlanApp from './03/SFCTodaysPlanApp';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodaysPlanApp />
        <SFCTodaysPlanApp hasPlan={true} />
      </div>
    );
  }
}

export default App;
