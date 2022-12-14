import React from 'react';
import "./icon.css";


function Icon(props) {

	const scientific_notation_helper = (num) => {
		if (num < 0.1 && num > 0) {
			return num.toExponential(2);
		} else {
			return num.toFixed(2);
		}
	}
	return (
		<div className="iconContainer">
			<img alt="" className='iconImage' src={props.img} onClick={() => {
                if(props.onClick){
                    props.onClick(); 
                }
            }}/>
			{/* <div className='iconFlex'> */}
			<div className='iconLabel'>{"" + scientific_notation_helper(props.value) + " " + props.label}</div>
			{/* <div className='iconValue'>{props.value.toFixed(2)}</div> */}
			{/* </div> */}
		</div>
	);
}

export default Icon;