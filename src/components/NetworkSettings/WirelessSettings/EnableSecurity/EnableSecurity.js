import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import styles from './EnableSecurity.module.css';

const Input = styled(TextField) ({
	flexBasis: '50%',
	marginLeft: '15px',
	borderRadius: '2px'
})

const StyledCheckbox = styled(Checkbox) ({
	color: 'purple'
})

const EnableSecurity = React.memo(({
	required,
	disabled,
	toggleWifiSecurityEnable,
	wifiSecurityEnabled,
	wifiSecurityKey,
	wifiSecurityKeyChanged,
	errorWifiSecurityKey }) => {

	const asterisk = <span style={{ color: 'red' }}>*</span>;

	return (
		<>
			<FormControlLabel
				control={
					<StyledCheckbox
						value="enableWifiSecurity"
						disabled={disabled}
						onChange={toggleWifiSecurityEnable}
					/>
				}
				label="Enable Wireless Security"
			/>
			<div className={styles.container} style={{ opacity: !wifiSecurityEnabled || disabled ? '0.5' : '1' }}>
				<Typography variant="subtitle1">Security Key: {required && asterisk} </Typography>
				<Input
					variant="outlined"
					size="small"
					required={required}
					disabled={!wifiSecurityEnabled || disabled}
					value={wifiSecurityKey}
					onChange={wifiSecurityKeyChanged}
					error={errorWifiSecurityKey ? true : false}
					label={errorWifiSecurityKey} />
			</div>
		</>
	);
});

export default EnableSecurity;