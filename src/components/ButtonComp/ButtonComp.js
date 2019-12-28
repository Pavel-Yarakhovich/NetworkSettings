import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
	border-radius: 15px;
	margin: 15px 0 15px 20px;
	min-width: 100px;
	height: 30px;
	background: purple;
	border: 1px solid purple;
	color: white;
	transition: all .3s ease;
	fon-size: 18px;

	:hover,
	:active {
		cursor: pointer;
		box-shadow: 2px 3px 5px purple;
		outline: none;
		border-bottom-color: white;
		border-right-color: white;
	}

	:disabled {
		background: grey;
		border-color: grey;

		:hover {
			box-shadow: none;
			cursor: not-allowed;
		}
	}

	${props => props.variant === 'outlined' &&`
		background: transparent;
		color: purple;
	`}
`

const ButtonComp = React.memo(({ variant, children, clicked, disabled }) => {
	return(
		<MyButton 
			variant={variant} 
			onClick={ clicked }
			disabled={disabled ? true : false}
			>{children}
			</MyButton>
	);
});

export default ButtonComp;