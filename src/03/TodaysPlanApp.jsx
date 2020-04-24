import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDaysPlan from './TodaysPlan';

class TodaysPlanApp extends Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className="body">
        {hasPlan ? <ToDaysPlan /> : null}
        <button onClick={onButtonClick}>계획없음</button>
      </div>
    );
  }
}

TodaysPlanApp.propTypes = {
  onButtonClick: PropTypes.any,
  hasPlan: PropTypes.bool,
};
export default TodaysPlanApp;
