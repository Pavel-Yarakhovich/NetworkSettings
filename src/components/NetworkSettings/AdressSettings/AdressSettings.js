import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import RadioBtnComponent from '../RadioBtnComponent/RadioBtnComponent';
import styles from './AdressSettings.module.css';

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
		<div className={styles.container}>
			<RadioBtnComponent
				firstChoice={'Obtain an IP adress automatically (DHCP/BootP)'}
				secondChoice={'Use the following IP adress'}
				autoSelected={autoSelectedIP}
				manualSelected={manualSelectedIP}
				radioValue={autoIP}
				wifiEnabled={wifiEnabled}
				appliedTo={appliedTo} />
			<div style={{ opacity: autoIP || (appliedTo === 'Wifi' && !wifiEnabled) ? '0.5' : '1'}}>
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
			</div>
			<RadioBtnComponent style={{ opacity: wifiEnabled ? '0.5' : '1'}}
				firstChoice={'Obtain DNS adress automatically'}
				secondChoice={'Use the following DNS server adress'}
				autoSelected={autoSelectedDNS}
				manualSelected={manualSelectedDNS}
				radioValue={autoDNS}
				wifiEnabled={wifiEnabled}
				appliedTo={appliedTo} />
			<div style={{ opacity: autoDNS || (appliedTo === 'Wifi' && !wifiEnabled) ? '0.5' : '1'}}>
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
			</div>
		</div>
	);
});

export default AdressSettings;