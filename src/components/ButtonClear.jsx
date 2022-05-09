import React from 'react';
import '../stylecomponents/ButtonClearStyle.css';
const ButtonClear = (props) => {
	return (
		<div
			className="button-clear"
			onClick={() => props.handleClick(props.handleClear)}
		>
			Clear
		</div>
	);
};

export default ButtonClear;
