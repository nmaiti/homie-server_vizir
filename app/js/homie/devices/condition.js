'use strict';

import React from 'react';

import Device from '../device';

export default class Condition extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let conditionText;
    switch (this.props.state.current.condition) {
      case 'clear-day':
        conditionText = 'Clear day';
        break;
      case 'clear-night':
        conditionText = 'Clear Night';
        break;
      case 'rain':
        conditionText = 'Rainy';
        break;
      case 'snow':
        conditionText = 'Snowy';
        break;
      case 'sleet':
        conditionText = 'Melted snow';
        break;
      case 'wind':
        conditionText = 'Windy';
        break;
      case 'fog':
        conditionText = 'Foggy';
        break;
      case 'cloudy':
        conditionText = 'Cloudy';
        break;
      case 'partly-cloudy-day':
        conditionText = 'Jour partiellement nuageux';
        break;
      case 'partly-cloudy-night':
        conditionText = 'Nuit partiellement nuageuse';
        break;
    }

    return (
      <Device image={this.props.state.current.condition} color='#325159' {...this.props}>
        <h3 style={{ color: '#1B1C1D' }}>
          { typeof conditionText !== 'undefined' ? conditionText : '?' }
        </h3>
      </Device>
    );
  }
}

Condition.propTypes = {
  state: React.PropTypes.shape({
    current: React.PropTypes.shape({
      condition: React.PropTypes.string
    })
  })
};
