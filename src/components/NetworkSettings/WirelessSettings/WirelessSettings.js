import React from 'react';
import AdressSettings from '../AdressSettings/AdressSettings';
import EnableWifi from './EnableWifi/EnableWifi';
import EnableSecurity from './EnableSecurity/EnableSecurity';
import styled from 'styled-components';

const Container = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	padding: 15px;
	box-sizing: border-box;
	border-left: 1px solid purple;
`

const Title = styled.h2`
	font-weight: 700;
	margin: 0 0 5px;
	color: purple;
`

const Wifi = React.memo(({
	autoIP,
	autoSelectedIP,
	manualSelectedIP,
	autoDNS,
	autoSelectedDNS,
	manualSelectedDNS,
	wifiEnabled,
	wifiSecurityEnabled,
	toggleWifiEnable,
	toggleWifiSecurityEnable,
	wifiIpChanged, wifiIP, errorWifiIP,
	wifiSubnetMaskChanged, wifiSubnetMask, errorWifiSubnetMask,
	wifiPreferredDNSChanged, wifiPreferredDNS, errorWifiPreferredDNS,
	wifiSecurityKey, wifiSecurityKeyChanged, errorWifiSecurityKey,
	wifiDefaultGateway, wifiDefaultGatewayChanged,
	wifiAltDNS, wifiAltDNSChanged,
	wifiNetworkName, wifiNetworkNameChanged,
	refreshBtnClicked }) => {

	return (
		<Container>
			<Title>Wireless settings</Title>
			<EnableWifi 
				required 
				toggleWifiEnable={toggleWifiEnable}
				wifiEnabled={wifiEnabled}
				wifiNetworkName={wifiNetworkName}
				wifiNetworkNameChanged={wifiNetworkNameChanged}
				refreshBtnClicked={refreshBtnClicked} />
			<EnableSecurity 
				required 
				disabled={!wifiEnabled} 
				toggleWifiSecurityEnable={toggleWifiSecurityEnable} 
				wifiSecurityEnabled={wifiSecurityEnabled}
				wifiSecurityKey={wifiSecurityKey}
				wifiSecurityKeyChanged={wifiSecurityKeyChanged}
				errorWifiSecurityKey={errorWifiSecurityKey} />
			<AdressSettings
				autoIP={autoIP}
				autoSelectedIP={autoSelectedIP}
				manualSelectedIP={manualSelectedIP}
				autoDNS={autoDNS}
				autoSelectedDNS={autoSelectedDNS}
				manualSelectedDNS={manualSelectedDNS}
				wifiEnabled={wifiEnabled}
				appliedTo={'Wifi'}
				IpChanged={wifiIpChanged}
				inputIPValue={wifiIP}
				errorIpMessage={errorWifiIP}
				subnetMaskChanged={wifiSubnetMaskChanged}
				inputSubnetMaskValue={wifiSubnetMask}
				errorSubnetMaskMessage={errorWifiSubnetMask}
				preferredDNSChanged={wifiPreferredDNSChanged}
				inputPreferredDNSValue={wifiPreferredDNS}
				errorPreferredDNSMessage={errorWifiPreferredDNS}
				defaultGateway={wifiDefaultGateway}
				defaultGatewayChanged={wifiDefaultGatewayChanged}
				altDNS={wifiAltDNS}
				altDNSChanged={wifiAltDNSChanged} />
		</Container>
	);
});

export default Wifi;