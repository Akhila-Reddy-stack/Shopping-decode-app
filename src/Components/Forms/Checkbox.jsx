import React, { useState } from 'react';

function CheckBox({ value, label, checked }) {
	const [checkValue, setcheckValue] = useState('');
	let data = {
		value: value,
		label: label,
	};
	let handleChange = (event) => setcheckValue(event.value);
	return (
		<div class="custom-control custom-radio">
			<input type="radio" class="custom-control-input" id="customCheck1" checked={checked} />
			<label style={{ fontSize: '20px', fontWeight: '600' }} class="custom-control-label" for="customCheck1">
				{label}
			</label>
		</div>
	);
}

export default React.memo(CheckBox);
CheckBox.defaultProps = {
	value: '',
	label: '',
};

// import React from 'react'
// export const CheckBox = props => {
//     return (
//         <div>
//             <input key={props.id} onClick={props.handleCheckChieldElement}
//             type="radio" value={props.value} /> {props.value}
//             {console.log(props.value)}
//         </div>
//     )
// }
// export default CheckBox;
