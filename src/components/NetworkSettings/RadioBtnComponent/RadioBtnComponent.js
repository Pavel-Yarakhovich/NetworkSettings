import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styles from './RadioBtnComponent.module.css';
import { styled } from '@material-ui/core/styles';

const StyledRadio = styled(Radio) ({
	color: 'purple'
})

const RadioBtnComponent = React.memo(({
	firstChoice,
	secondChoice,
	autoSelected,
	manualSelected,
	radioValue,
	wifiEnabled,
	appliedTo }) => {

	return (
		<div className={styles.container} >
			<RadioGroup aria-label="position" name="position" column="true">
				<FormControlLabel
					value="auto"
					onChange={autoSelected}
					control={<StyledRadio />}
					label={firstChoice}
					labelPlacement="end"
					disabled={!wifiEnabled && appliedTo === 'Wifi'}
					checked={radioValue}
				/>
				<FormControlLabel
					value="manual"
					onChange={manualSelected}
					control={<StyledRadio />}
					label={secondChoice}
					labelPlacement="end"
					disabled={!wifiEnabled && appliedTo === 'Wifi'}
					checked={!radioValue}
				/>
			</RadioGroup>
		</div>
	);
});

export default RadioBtnComponent;