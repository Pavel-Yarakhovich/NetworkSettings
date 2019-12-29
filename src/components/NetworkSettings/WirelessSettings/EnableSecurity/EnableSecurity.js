import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Input = styled(TextField)`
&& {
	flex-basis: 50%;
	margin-left: 15px;
	border-radius: 2px;
}`

const StyledCheckbox = styled(Checkbox)`
&& {
	color: purple;
}`

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 4px 0;
	opacity: 1;

	${props => (!props.wifiSecurityEnabled || props.disabled) &&`
		opacity: 0.5;
	`}
`

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
			<Container wifiSecurityEnabled={wifiSecurityEnabled} disabled={disabled}>
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
			</Container>
		</>
	);
});

export default EnableSecurity;