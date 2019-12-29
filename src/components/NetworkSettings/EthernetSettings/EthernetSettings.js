import React from 'react';
import AdressSettings from '../AdressSettings/AdressSettings';
import styled from 'styled-components';

const Container = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	padding: 15px;
	box-sizing: border-box;
`

const Title = styled.h2`
	font-weight: 700;
	margin: 0 0 5px;
	color: purple;
`

const Ethernet = React.memo(({
	autoIP,
	autoSelectedIP,
	manualSelectedIP,
	autoDNS,
	autoSelectedDNS,
	manualSelectedDNS,
	ethernetIpChanged, ethernetIP, errorEthernetIP,
	ethernetSubnetMaskChanged, ethernetSubnetMask, errorEthernetSubnetMask,
	ethernetPreferredDNSChanged, ethernetPreferredDNS, errorEthernetPreferredDNS,
	ethernetDefaultGateway, ethernetDefaultGatewayChanged,
	ethernetAltDNS, ethernetAltDNSChanged }) => {

	return (
		<Container>
			<Title>Ethernet settings</Title>
			<AdressSettings
				autoIP={autoIP}
				autoSelectedIP={autoSelectedIP}
				manualSelectedIP={manualSelectedIP}
				autoDNS={autoDNS}
				autoSelectedDNS={autoSelectedDNS}
				manualSelectedDNS={manualSelectedDNS}
				appliedTo={'Ethernet'}
				IpChanged={ethernetIpChanged}
				inputIPValue={ethernetIP}
				errorIpMessage={errorEthernetIP}
				subnetMaskChanged={ethernetSubnetMaskChanged}
				inputSubnetMaskValue={ethernetSubnetMask}
				errorSubnetMaskMessage={errorEthernetSubnetMask}
				preferredDNSChanged={ethernetPreferredDNSChanged}
				inputPreferredDNSValue={ethernetPreferredDNS}
				errorPreferredDNSMessage={errorEthernetPreferredDNS}
				defaultGateway={ethernetDefaultGateway}
				defaultGatewayChanged={ethernetDefaultGatewayChanged}
				altDNS={ethernetAltDNS}
				altDNSChanged={ethernetAltDNSChanged} />
		</Container>
	);
});

export default Ethernet;