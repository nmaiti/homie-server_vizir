'use strict';

import React from 'react';

import Device from '../device';

export default class Camc extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
   
      <Device image= { typeof this.props.state.current.source === 'undefined' ? "http://192.168.1.100:8080/?action=stream" : this.props.state.current.source } color='#ea6153' ref='device' {...this.props}>
         <br/>
		<div className='value'>
			{ typeof this.props.state.current.source != 'undefined' ? this.props.state.current.source: "http://192.168.1.100:8080/?action=stream" }
		</div>

	    <div className='ui two buttons'>
          <button className='ui green icon compact button' >
             <i className='chevron plus icon'></i>
          </button>
          <button className='ui red icon compact button' >
			<i className='chevron minus icon'></i>
          </button>	 
        </div>
      </Device>
    );
  }
}

Camc.propTypes = {
  state: React.PropTypes.shape({
    current: React.PropTypes.shape({
      source: React.PropTypes.String
    })
  })
};
