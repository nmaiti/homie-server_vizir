'use strict';

import React from 'react';

import Device from '../device';


export default class Sttnode extends React.Component {
  constructor (props) {
    super(props);
  }

  toggle(value)  {
  	  this.refs['device'].setProperty2('824d4ae0', 'lighta', 'on', value);
  }

	render () {
	  return (
      <Device image= { typeof this.props.state.current.out === 'undefined' ? undefined : this.props.state.current.out ? 'mic_rcvd':'mic' } color='#ea6153' ref='device' {...this.props}>
		<div className='value'>
	  	  { typeof this.props.state.current.out != 'undefined' ? this.props.state.current.out : '?' }
		</div>
	   <div className='ui two buttons'>
	     <button id="linkid" className='ui green compact button' onClick={() => this.toggle('true')} >LightA</button> 	 
	     <button id="linkid2" className='ui red compact button' onClick={() => this.toggle('false')} >LightA</button> 
        </div>
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
