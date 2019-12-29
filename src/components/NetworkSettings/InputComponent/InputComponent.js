import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styled  from 'styled-components';

const Input = styled(TextField)`
	&& {
		flex-basis: 50%;
		margin-left: 15px;
		border-radius: 2px
	}
`
const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 4px 0;
`

const Asterisk = styled.span`
	color: red;
`

const InputComponent = React.memo(({
	label,
	required,
	disabled,
	appliedTo,
	wifiEnabled,
	inputChanged,
	inputValue,
	errorMessage }) => {

	return (
		<Container>
			<Typography variant="subtitle1">{ label }: { required && <Asterisk>*</Asterisk> } </Typography>
			<Input
				variant="outlined"
				size="small"
				required={ required }
				disabled={ disabled || (appliedTo === 'Wifi' && !wifiEnabled) }
				onChange={inputChanged}
				value={inputValue}
				label={errorMessage}
				error={errorMessage ? true : false} />
		</Container>
	);
});

export default InputComponent;