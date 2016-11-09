'use strict';

import React from 'react';

import Device from '../device';


export default class Shutters extends React.Component {
  constructor (props) {
    super(props);
  }

  open () {
      var val = parseInt(this.props.state.current.level)+10;
	  	val = val <= 100 ? val : val - 10;
       console.log("NBM_N3b_here");
	  this.refs['device'].setPropertyD('level', val);
  }

  half () {
    this.refs['device'].setPropertyD('level', 50);
  }

  close () {
      var val = parseInt(this.props.state.current.level)-10;
	  	val = val  >= 0 ? val : val+10;
       console.log("NBM_N3b_here");
	  this.refs['device'].setPropertyD('level', val);
  }

  render () {
    console.log("NBM_N2_here");
    return (
      <Device image={typeof this.props.state.current.level === 'undefined' ? undefined : this.props.state.current.level === 100 ? 100 : this.props.state.current.level >= 90 ? 90 : this.props.state.current.level >= 80 ? 80 : this.props.state.current.level >= 70 ? 70 : this.props.state.current.level >= 60 ? 60 : this.props.state.current.level >= 50 ? 50 : this.props.state.current.level >= 40 ? 40 : this.props.state.current.level >= 30 ? 30 : this.props.state.current.level >= 20 ? 20 : this.props.state.current.level >= 10 ? 10 : 0} color='#f1c40f' ref='device' {...this.props}>
        <div className='ui three buttons'>
          <button className='ui red icon compact button' onClick={() => this.close()}>
	      	<i className='chevron minus icon'></i>
          </button>
          <button className='ui orange compact button' onClick={() => this.half()}>
 			50%
		  </button>
	      <button className='ui green icon compact button' onClick={() => this.open()}>
              <i className='chevron plus icon'></i>
          </button>
        </div>
      </Device>
    );
  }
}

Shutters.propTypes = {
  state: React.PropTypes.shape({
    current: React.PropTypes.shape({
      level: React.PropTypes.number
    })
  })
};
