import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styles from './InputComponent.module.css';
import { styled } from '@material-ui/core/styles';

const Input = styled(TextField) ({
	flexBasis: '50%',
	marginLeft: '15px',
	borderRadius: '2px'
})

const asterisk = <span style={{ color: 'red' }}>*</span>;

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
		<div className={styles.container}>
			<Typography variant="subtitle1">{ label }: { required && asterisk } </Typography>
			<Input
				variant="outlined"
				size="small"
				required={ required }
				disabled={ disabled || (appliedTo === 'Wifi' && !wifiEnabled) }
				onChange={inputChanged}
				value={inputValue}
				label={errorMessage}
				error={errorMessage ? true : false} />
		</div>
	);
});

export default InputComponent;