import React from 'react';
import AdressSettings from '../AdressSettings/AdressSettings';
import styles from './EthernetSettings.module.css';

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
		<div className={styles.container}>
			<h2 className={styles.title}>Ethernet settings</h2>
			<AdressSettings
				className={styles.container}
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
		</div>
	);
});

export default Ethernet;