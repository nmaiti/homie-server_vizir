'use strict';

import React from 'react';

import Device from '../device';

export default class Pir extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Device image={typeof this.props.state.current.on === 'undefined' ? undefined : this.props.state.current.on ? 'pir_on' : 'pir_off'} color='#ea6153' ref='device' {...this.props}>
	     <div className='ui small horizontal statistic'> PIR Sensor : 
		 <div className='value'>
		  { typeof this.props.state.current.on != 'undefined' ? (this.props.state.current.on ? 'ON' : 'OFF') : '?' }
          </div>
        </div>
      </Device>
    );
  }
}

Pir.propTypes = {
  state: React.PropTypes.shape({
    current: React.PropTypes.shape({
      on: React.PropTypes.bool
    })
  })
};
