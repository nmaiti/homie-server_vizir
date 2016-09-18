'use strict';

import React from 'react';

import Device from '../device';

export default class Camc extends React.Component {
  constructor (props) {
    super(props);
  }

   stillrefresh() {
      console.log('setTimeout() executed, cntSt=');
	var now = new Date();
   	this.refs.stillimage.src = 'http://12.154.129.248/jpg/image.jpg?time='+now.getTime()+'&dummy=image.jpg';
//	delete now[];
//	setTimeout(this.stillrefresh(),30000);
  } 


  render () {
    return (
      <Device  color='#ea6153' ref='device' {...this.props}>
      		<div className='image'>
		 <img
		   src='http://12.154.129.248/mjpg/video.mjpg' id='stillimage'  ref='stillimage' width='180' height='250' onClick={() => this.stillrefresh()}	/>
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
