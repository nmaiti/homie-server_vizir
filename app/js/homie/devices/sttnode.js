'use strict';

import React from 'react';

import Device from '../device';


export default class Sttnode extends React.Component {
  constructor (props) {
    super(props);
  }

	render () {
	  return (
      <Device image= { typeof this.props.state.current.out === 'undefined' ? undefined : this.props.state.current.out ? 'mic_rcvd':'mic' } color='#ea6153' ref='device' {...this.props}>
         <br/>
		  { typeof this.props.state.current.out != 'undefined' ? this.props.state.current.out : '?' }
		</Device>
    );
  }
}

Sttnode.propTypes = {
  state: React.PropTypes.shape({
    current: React.PropTypes.shape({
      out: React.PropTypes.string
    })
  })
};
