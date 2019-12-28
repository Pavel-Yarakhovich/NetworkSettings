import React from 'react';
import { ButtonComp, Wifi, Ethernet } from '../components';
import styles from './Layouts.module.css';

const regExpIP = /^(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{2}|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{2}|[0-9])){3}$/;

const Layouts = React.memo(props => {

	const [autoIPEthernet, setAutoIPEthernet] = React.useState(true);
	const [autoDnsEthernet, setAutoDnsEthernet] = React.useState(true);

	const [autoIPWireless, setAutoIPWireless] = React.useState(true);
	const [autoDnsWireless, setAutoDnsWireless] = React.useState(true);

	const [wifiEnabled, setWifiEnabled] = React.useState(false);
	const [wifiSecurityEnabled, setWifiSecurityEnabled] = React.useState(false);

	const [ethernetIP, setEthernetIP] = React.useState('auto obtained IP adress');
	const [errorIP, setErrorIp] = React.useState('');

	const [ethernetSubnetMask, setEthernetSubnetMask] = React.useState('auto obtained subnet mask');
	const [errorSubnetMask, setErrorSubnetMask] = React.useState('');

	const [ethernetPreferredDNS, setEthernetPreferredDNS] = React.useState('auto obtained preferred DNS server');
	const [errorPreferredDNS, setErrorPreferredDNS] = React.useState('');

	const [ethernetDefaultGateway, setEthernetDefaultGateway] = React.useState('auto obtained default gateway');
	const [ethernetAltDNS, setEthernetAltDNS] = React.useState('auto obtained alternative DNS server');

	const [wifiIP, setWifiIP] = React.useState('auto obtained IP adress');
	const [errorWifiIP, setErrorWifiIp] = React.useState('');

	const [wifiNetworkName, setWifiNetworkName] = React.useState('');

	const [wifiSubnetMask, setWifiSubnetMask] = React.useState('auto obtained subnet mask');
	const [errorWifiSubnetMask, setErrorWifiSubnetMask] = React.useState('');

	const [wifiPreferredDNS, setWifiPreferredDNS] = React.useState('auto obtained preferred DNS server');
	const [errorWifiPreferredDNS, setErrorWifiPreferredDNS] = React.useState('');

	const [wifiSecurityKey, setWifiSecurityKey] = React.useState('');
	const [errorWifiSecurityKey, setErrorWifiSecurityKey] = React.useState('');

	const [wifiDefaultGateway, setWifiDefaultGateway] = React.useState('auto obtained default gateway');
	const [wifiAltDNS, setWifiAltDNS] = React.useState('auto obtained alternative DNS server');

	const [saveBtnDisabled, setSaveBtnDisabled] = React.useState(false);

	const ethernetSettings = {
		IPAdress: ethernetIP,
		subnetMask: ethernetSubnetMask,
		defaultGateway: ethernetDefaultGateway,
		preferredDNSServer: ethernetPreferredDNS,
		altDNSServer: ethernetAltDNS
	}

	const wifiSettings = {
		wirelessNetworkName: wifiNetworkName,
		securityKey: wifiSecurityKey,
		IPAdress: wifiIP,
		subnetMask: wifiSubnetMask,
		defaultGateway: wifiDefaultGateway,
		preferredDNSServer: wifiPreferredDNS,
		altDNSServer: wifiAltDNS
	}

	const manualSelectedIPHandler = () => {
		setAutoIPEthernet(false);
		setEthernetIP('');
		checkAdressValidity(ethernetIP, setErrorIp);
		setEthernetSubnetMask('');
		checkAdressValidity(ethernetSubnetMask, setErrorSubnetMask);
		setEthernetDefaultGateway('');
	}

	const manualSelectedDNSHandler = () => {
		setAutoDnsEthernet(false);
		setEthernetPreferredDNS('');
		checkAdressValidity(ethernetPreferredDNS, setErrorPreferredDNS);
		setEthernetAltDNS('');
	}

	const manualSelectedWifiIPHandler = () => {
		setAutoIPWireless(false);
		setWifiIP('');
		checkAdressValidity(wifiIP, setErrorWifiIp);
		setWifiSubnetMask('');
		checkAdressValidity(wifiSubnetMask, setErrorWifiSubnetMask);
		setWifiDefaultGateway('');
	}

	const manualSelectedWifiDNSHandler = () => {
		setAutoDnsWireless(false);
		setWifiPreferredDNS('');
		checkAdressValidity(wifiPreferredDNS, setErrorWifiPreferredDNS);
		setWifiAltDNS('');
	}

	const ethernetDefaultGatewayChangedHandler = (e) => setEthernetDefaultGateway(e.target.value);
	const ethernetAltDNSChangedHandler = (e) => setEthernetAltDNS(e.target.value);
	const wifiDefaultGatewayChangedHandler = (e) => setWifiDefaultGateway(e.target.value);
	const wifiAltDNSChangedHandler = (e) => setWifiAltDNS(e.target.value);

	const checkAdressValidity = (value, setErrorFn) => {
		!value ? setErrorFn('No value entered') :
			!regExpIP.test(value) ? setErrorFn('Please enter correct data') : setErrorFn('');
	}

	const ethernetIpChangedHandler = (e) => {
		setEthernetIP(e.target.value);
		checkAdressValidity(e.target.value, setErrorIp);
	}
	const ethernetSubnetMaskChangedHandler = (e) => {
		setEthernetSubnetMask(e.target.value);
		checkAdressValidity(e.target.value, setErrorSubnetMask);
	}
	const ethernetPreferredDNSChangedHandler = (e) => {
		setEthernetPreferredDNS(e.target.value);
		checkAdressValidity(e.target.value, setErrorPreferredDNS);
	}
	const wifiIpChangedHandler = (e) => {
		setWifiIP(e.target.value);
		checkAdressValidity(e.target.value, setErrorWifiIp);
	}
	const wifiNetworkNameChangedHandler = (e) => setWifiNetworkName(e.target.value);

	const wifiSubnetMaskChangedHandler = (e) => {
		setWifiSubnetMask(e.target.value);
		checkAdressValidity(e.target.value, setErrorWifiSubnetMask);
	}
	const wifiPreferredDNSChangedHandler = (e) => {
		setWifiPreferredDNS(e.target.value);
		checkAdressValidity(e.target.value, setErrorWifiPreferredDNS);
	}

	const checkSecurityKeyValidity = (value) => {
		!value ? setErrorWifiSecurityKey('No value entered') :
			value.length < 8 ? setErrorWifiSecurityKey('Security key should contain 8 chars min') : setErrorWifiSecurityKey('');
	}

	const wifiSecurityKeyChangedHandler = (e) => {
		setWifiSecurityKey(e.target.value);
		checkSecurityKeyValidity(e.target.value);
	}

	const toggleWifiSecurityEnableHandler = () => {
		setWifiSecurityEnabled(!wifiSecurityEnabled);
		setWifiSecurityKey('');
		setErrorWifiSecurityKey('');
	}

	React.useEffect(() => {
		if (wifiSecurityEnabled) {
			checkSecurityKeyValidity(wifiSecurityKey);
		}
	}, [wifiSecurityEnabled, wifiSecurityKey])

	const toggleWifiEnableHandler = () => {
		setWifiEnabled(!wifiEnabled);
		setWifiNetworkName('');
	}

	const setToAutoSelectedIP = () => {
		setAutoIPEthernet(true);
		setErrorIp('');
		setErrorSubnetMask('');
		setEthernetIP('auto obtained IP adress');
		setEthernetSubnetMask('auto obtained subnet mask');
		setEthernetDefaultGateway('auto obtained default gateway');
	}

	const setToAutoSelectedDNS = () => {
		setAutoDnsEthernet(true);
		setErrorPreferredDNS('');
		setEthernetPreferredDNS('auto obtained preferred DNS server');
		setEthernetAltDNS('auto obtained alternative DNS server');
	}

	const setToAutoSelectedWifiIP = () => {
		setAutoIPWireless(true);
		setErrorWifiIp('');
		setErrorWifiSubnetMask('');
		setWifiIP('auto obtained IP adress');
		setWifiSubnetMask('auto obtained subnet mask');
		setWifiDefaultGateway('auto obtained default gateway');
	}

	const setToAutoSelectedWifiDNS = () => {
		setAutoDnsWireless(true);
		setErrorWifiPreferredDNS('');
		setWifiPreferredDNS('auto obtained preferred DNS server');
		setWifiAltDNS('auto obtained alternative DNS server');
	}

	const refreshBtnClickedHandler = () => {
		setWifiNetworkName('');
	}

	const saveBtnClickedHandler = () => {
		console.log('Ethernet settings', ethernetSettings)
		if (!wifiEnabled) {
			console.log('Wifi disabled');
			return
		}
		console.log('Wifi settings:', wifiSettings)
	}
	
	const cancelBtnClickedHandler = () => {
		setAutoIPEthernet(true);
		setAutoDnsEthernet(true);
		setEthernetIP('auto obtained IP adress');
		setEthernetSubnetMask('auto obtained subnet mask');
		setEthernetDefaultGateway('auto obtained default gateway');
		setEthernetPreferredDNS('auto obtained preferred DNS server');
		setEthernetAltDNS('auto obtained alternative DNS server');

		setWifiEnabled(false);
		setWifiNetworkName('');
		setWifiSecurityEnabled(false);
		setWifiSecurityKey('');
		setAutoIPWireless(true);
		setAutoDnsWireless(true);
		setWifiIP('auto obtained IP adress');
		setWifiSubnetMask('auto obtained subnet mask');
		setWifiDefaultGateway('auto obtained default gateway');
		setWifiPreferredDNS('auto obtained preferred DNS server');
		setWifiAltDNS('auto obtained alternative DNS server');
	}

	React.useEffect(() => {
		if (errorIP || errorSubnetMask || errorPreferredDNS) {
			setSaveBtnDisabled(true);
		} else if (wifiEnabled && (errorWifiIP || errorWifiSubnetMask || errorWifiPreferredDNS || errorWifiSecurityKey || !wifiNetworkName)) {
			setSaveBtnDisabled(true);
		} else {
			setSaveBtnDisabled(false);
		}
	},
	[errorIP, errorSubnetMask, errorPreferredDNS,
	wifiEnabled, errorWifiIP, errorWifiSubnetMask, errorWifiPreferredDNS, errorWifiSecurityKey, wifiNetworkName ])

	return (
		<div className={styles.container}>
			<div className={styles.grid} >
				<Ethernet
					autoIP={autoIPEthernet}
					autoSelectedIP={setToAutoSelectedIP}
					manualSelectedIP={manualSelectedIPHandler}
					autoSelectedDNS={setToAutoSelectedDNS}
					manualSelectedDNS={manualSelectedDNSHandler}
					autoDNS={autoDnsEthernet}

					errorEthernetIP={errorIP}
					ethernetIP = {ethernetIP}
					ethernetIpChanged={ethernetIpChangedHandler}
					
					errorEthernetSubnetMask={errorSubnetMask}
					ethernetSubnetMask = {ethernetSubnetMask}
					ethernetSubnetMaskChanged={ethernetSubnetMaskChangedHandler}

					ethernetDefaultGateway={ethernetDefaultGateway}
					ethernetDefaultGatewayChanged={ethernetDefaultGatewayChangedHandler}

					ethernetAltDNS={ethernetAltDNS}
					ethernetAltDNSChanged={ethernetAltDNSChangedHandler}
					
					errorEthernetPreferredDNS={errorPreferredDNS}
					ethernetPreferredDNS = {ethernetPreferredDNS}
					ethernetPreferredDNSChanged={ethernetPreferredDNSChangedHandler} />

				<Wifi
					autoIP={autoIPWireless}
					autoSelectedIP={setToAutoSelectedWifiIP}
					manualSelectedIP={manualSelectedWifiIPHandler}
					autoSelectedDNS={setToAutoSelectedWifiDNS}
					manualSelectedDNS={manualSelectedWifiDNSHandler}
					autoDNS={autoDnsWireless}
					wifiEnabled={wifiEnabled}
					wifiSecurityEnabled={wifiSecurityEnabled}
					toggleWifiEnable={toggleWifiEnableHandler}
					toggleWifiSecurityEnable={toggleWifiSecurityEnableHandler}
					refreshBtnClicked={refreshBtnClickedHandler}
					
					errorWifiIP={errorWifiIP}
					wifiIP = {wifiIP}
					wifiIpChanged={wifiIpChangedHandler}

					wifiNetworkName = {wifiNetworkName}
					wifiNetworkNameChanged={wifiNetworkNameChangedHandler}
					
					errorWifiSubnetMask={errorWifiSubnetMask}
					wifiSubnetMask = {wifiSubnetMask}
					wifiSubnetMaskChanged={wifiSubnetMaskChangedHandler}
					
					errorWifiPreferredDNS={errorWifiPreferredDNS}
					wifiPreferredDNS = {wifiPreferredDNS}
					wifiPreferredDNSChanged={wifiPreferredDNSChangedHandler}
					
					wifiSecurityKey={wifiSecurityKey}
					wifiSecurityKeyChanged={wifiSecurityKeyChangedHandler}
					errorWifiSecurityKey={errorWifiSecurityKey}
					
					wifiDefaultGateway={wifiDefaultGateway}
					wifiDefaultGatewayChanged={wifiDefaultGatewayChangedHandler}

					wifiAltDNS={wifiAltDNS}
					wifiAltDNSChanged={wifiAltDNSChangedHandler} />
			</div>
			<ButtonComp 
				clicked={saveBtnClickedHandler}
				disabled={saveBtnDisabled}>Save</ButtonComp>
			<ButtonComp 
				variant={"outlined"}
				clicked={cancelBtnClickedHandler}>Cancel</ButtonComp>
		</div>
	);
});

export default Layouts;