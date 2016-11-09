'use strict';

import React from 'react';

import Device from '../device';


export default class Sttnode extends React.Component {
  constructor (props) {
    super(props);
  }

  toggle(value)  {
  	  this.refs['device'].setPropertyOD('824d4ae0', 'lighta', 'on', value);
  }
  toggle3()  {
	  console.log("fsddsfDS");
	 var elem = document.getElementById("linkidon");
	  if (typeof elem.onclick == "function") {
	  	    elem.onclick.call(elem);
	  }

//	document.getElementById("linkid").onclick();
//	$("#linkidon").trigger("onclick");

	return (
				<div>
				Done 2 done 2 done
				</div>
			   );
  }
	render () {

     return (
      <Device image= { typeof this.props.state.current.out === 'undefined' ? undefined : this.props.state.current.out ? 'mic_rcvd':'mic' } color='#ea6153' ref='device' {...this.props}>
		<div className='value'>
	  	  { typeof this.props.state.current.out != 'undefined' ? this.props.state.current.out : '?' }
		  { typeof this.props.state.current.out != 'undefined' ? this.toggle3() : '?' }
		</div>
	   <div className='ui two buttons'>
	     <button id="linkidon" className='ui green compact button' onClick={() => this.toggle('true')} >LightA</button> 	 
	     <button id="linkidoff" className='ui red compact button' onClick={() => this.toggle('false')} >LightA</button> 
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
