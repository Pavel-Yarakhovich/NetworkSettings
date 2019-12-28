import React from 'react';
import AdressSettings from '../AdressSettings/AdressSettings';
import EnableWifi from './EnableWifi/EnableWifi';
import EnableSecurity from './EnableSecurity/EnableSecurity';
import styles from './WirelessSettings.module.css';

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
		<div className={styles.container}>
			<h2 className={styles.title}>Wireless settings</h2>
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
				className={styles.container}
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
		</div>
	);
});

export default Wifi;