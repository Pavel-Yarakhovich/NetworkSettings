import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import RadioBtnComponent from '../RadioBtnComponent/RadioBtnComponent';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
`

const InputGroup = styled.div`
	opacity: 1;

	${props => (props.auto || (props.appliedTo === 'Wifi' && !props.wifiEnabled)) &&`
		opacity: 0.5;
	`}
`

const AdressSettings = React.memo(({
	autoIP,
	autoSelectedIP,
	manualSelectedIP,
	autoSelectedDNS,
	manualSelectedDNS,
	autoDNS,
	wifiEnabled,
	appliedTo,
	IpChanged, inputIPValue, errorIpMessage,
	subnetMaskChanged, inputSubnetMaskValue, errorSubnetMaskMessage,
	preferredDNSChanged, inputPreferredDNSValue, errorPreferredDNSMessage,
	defaultGateway, defaultGatewayChanged,
	altDNS, altDNSChanged }) => {

	return (
		<Container>
			<RadioBtnComponent
				firstChoice={'Obtain an IP adress automatically (DHCP/BootP)'}
				secondChoice={'Use the following IP adress'}
				autoSelected={autoSelectedIP}
				manualSelected={manualSelectedIP}
				radioValue={autoIP}
				wifiEnabled={wifiEnabled}
				appliedTo={appliedTo} />
			<InputGroup auto={autoIP} appliedTo={appliedTo} wifiEnabled={wifiEnabled}>
				<InputComponent
					label={'IP adress'}
					required
					disabled={autoIP}
					appliedTo={appliedTo}
					wifiEnabled={wifiEnabled}
					inputChanged={IpChanged}
					inputValue={inputIPValue}
					errorMessage={errorIpMessage} />
				<InputComponent
					label={'Subnet mask'}
					required
					disabled={autoIP}
					appliedTo={appliedTo}
					wifiEnabled={wifiEnabled}
					inputChanged={subnetMaskChanged}
					inputValue={inputSubnetMaskValue}
					errorMessage={errorSubnetMaskMessage} />
				<InputComponent
					label={'Default gateway'}
					disabled={autoIP}
					appliedTo={appliedTo}
					wifiEnabled={wifiEnabled}
					inputChanged={defaultGatewayChanged}
					inputValue={defaultGateway} />
			</InputGroup>
			<RadioBtnComponent
				firstChoice={'Obtain DNS adress automatically'}
				secondChoice={'Use the following DNS server adress'}
				autoSelected={autoSelectedDNS}
				manualSelected={manualSelectedDNS}
				radioValue={autoDNS}
				wifiEnabled={wifiEnabled}
				appliedTo={appliedTo} />
			<InputGroup auto={autoDNS} appliedTo={appliedTo} wifiEnabled={wifiEnabled}>
				<InputComponent
					label={'Preferred DNS server'}
					required disabled={autoDNS}
					appliedTo={appliedTo}
					wifiEnabled={wifiEnabled}
					inputChanged={preferredDNSChanged}
					inputValue={inputPreferredDNSValue}
					errorMessage={errorPreferredDNSMessage} />
				<InputComponent
					label={'Alternative DNS server'}
					disabled={autoDNS}
					appliedTo={appliedTo}
					wifiEnabled={wifiEnabled}
					inputChanged={altDNSChanged}
					inputValue={altDNS} />
			</InputGroup>
		</Container>
	);
});

export default AdressSettings;