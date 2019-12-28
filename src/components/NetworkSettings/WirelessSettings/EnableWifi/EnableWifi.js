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
import { styled } from '@material-ui/core/styles';
import styles from './EnableWifi.module.css';

const SelectForm = styled(FormControl) ({
	flexGrow: '1',
	marginRight: '15px'
})

const RefreshBtn = styled(Fab) ({
	border: '1px solid lightgrey',
	background: 'white',
	boxShadow: 'none'
})

const StyledCheckbox = styled(Checkbox) ({
	color: 'purple'
})

const asterisk = <span style={{ color: 'red' }}>*</span>;

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
			<div className={styles.container}>
				<Typography
					style={{ opacity: wifiEnabled ? '1' : '0.5' }}
					variant="subtitle1">Wireless Network Name: {required && asterisk} </Typography>
				<div className={styles.half}>
					<SelectForm variant="outlined" size="small" disabled={!wifiEnabled} error={wifiEnabled & !wifiNetworkName ? true : false}>
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
				</div>
			</div>
		</>
	);
});

export default EnableWifi;