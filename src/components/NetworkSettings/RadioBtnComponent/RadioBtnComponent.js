import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

const StyledRadio = styled(Radio)`
&& {
	color: purple;
	}
`

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

const RadioBtnComponent = React.memo(({
	firstChoice,
	secondChoice,
	autoSelected,
	manualSelected,
	radioValue,
	wifiEnabled,
	appliedTo }) => {

	return (
		<Container>
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
		</Container>
	);
});

export default RadioBtnComponent;