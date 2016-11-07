'use strict';

import React from 'react';

import Device from '../device';

export default class Camc extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
   
      <Device image={"http://12.154.129.248/mjpg/video.mjpg"} color='#ea6153' ref='device' {...this.props}>
         <br/>
         <br/>
	    <div className='ui two buttons'>
          <button className='ui green icon compact button' >
             <i className='chevron plus icon'></i>
          </button>
          <button className='ui red icon compact button' >
			<i className='chevron minus icon'></i>
          </button>	 

        </div>
	  <div className='lebel'> cam display : 
        </div>
      </Device>
    );
  }
}

Camc.propTypes = {
  state: React.PropTypes.shape({
    current: React.PropTypes.shape({
      on: React.PropTypes.bool
    })
  })
};
