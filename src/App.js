import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';
import PropComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildCOmponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import './App.css';

class App extends React.Component {
  render() {
    const array = [1, 2, 3];
    const obj = { name: '제목', age: 30 };
    const node = <h1>노드</h1>;
    const func = () => {
      console.log('메시지');
    };
    const bored = true;
    return (
      <div className="App">
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
        <h1 className="title">두잇! 리액트 시작하기</h1>
        <div>안녕하세요</div>
        <div className="body">
          <TodaysPlan />
          <PropComponent name="두잇 리액트" />
          <ChildComponent
            boolValue={true}
            numValue={1}
            arrayValue={array}
            objValue={obj}
            nodeValue={node}
            funcValue={func}
          />
        </div>
        <b>
          <BooleanComponent bored />
          <BooleanComponent />
        </b>
        <div>
          <ChildCOmponent2 objValue={{ age: 20 }} requiredStringValue="문자" />
        </div>
        <DefaultPropsComponent />
        <ChildProperty>
          <div>
            <span>자식노드</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
