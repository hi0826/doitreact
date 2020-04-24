import TodaysPlan from './TodaysPlan';
import React, { Component } from 'react';

function SFCTodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button OnClick={onButtonClick}>계획없음</button>
    </div>
  );
}

export default SFCTodaysPlanApp;
