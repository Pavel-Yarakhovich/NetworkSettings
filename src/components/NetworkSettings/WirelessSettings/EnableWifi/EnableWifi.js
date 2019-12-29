import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Refresh from '@material-ui/icons/Refresh';
import styled from 'styled-components';

const SelectForm = styled(FormControl)`
&& {
	flex-grow: 1;
	margin-right: 15px;
	}
`

const RefreshBtn = styled(Fab)`
&& {
	border: 1px solid lightgrey;
	background: white;
	box-shadow: none;
	}
`

const StyledCheckbox = styled(Checkbox)`
&& {
	color: purple;
	}
`

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 4px 0;
`

const SelectBlock = styled.div`
	flex-basis: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-left: 15px;
`

const SelectLabel = styled(Typography)`
&& {
	opacity: 0.5;

	${props => props.wifiEnabled &&`
		opacity: 1;
	`}
}
`

const Asterisk = styled.span`
	color: red;
`

const EnableWifi = React.memo(({ 
	required, 
	toggleWifiEnable, 
	wifiEnabled, 
	wifiNetworkName, 
	wifiNetworkNameChanged, 
	refreshBtnClicked }) => {

	return (
		<>
			<FormControlLabel
				control={
					<StyledCheckbox
						value="enableWifi"
						onChange={toggleWifiEnable}
						checked={wifiEnabled ? true : false}
					/>
				}
				label="Enable wifi"
			/>
			<Container>
				<SelectLabel
					wifiEnabled={wifiEnabled}
					variant="subtitle1">Wireless Network Name: {required && <Asterisk>*</Asterisk>} </SelectLabel>
				<SelectBlock>
					<SelectForm
						variant="outlined"
						size="small"
						disabled={!wifiEnabled}
						error={wifiEnabled & !wifiNetworkName ? true : false}>
						<InputLabel id="enable_wifi">Please select</InputLabel>
						<Select labelId="enable_wifi" value={wifiNetworkName} onChange={wifiNetworkNameChanged}>
							<MenuItem value="">
								<em>Default Name</em>
							</MenuItem>
							<MenuItem value="name_1">Name 1</MenuItem>
							<MenuItem value="name_2">Name 2</MenuItem>
							<MenuItem value="name_3">Name 3</MenuItem>
						</Select>
					</SelectForm>
					<RefreshBtn size="small" disabled={!wifiEnabled} onClick={refreshBtnClicked}>
						<Refresh />
					</RefreshBtn>
				</SelectBlock>
			</Container>
		</>
	);
});

export default EnableWifi;