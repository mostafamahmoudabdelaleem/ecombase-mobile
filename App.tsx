import React from 'react';
import {
	ScrollView,
	StatusBar,
	useColorScheme
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context'
import { ErrorBoundary } from './src/Components/ErrorBoundry';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#343434' : '#f1f1f3',
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<ErrorBoundary>
				<StatusBar
					barStyle={isDarkMode ? 'light-content' : 'dark-content'}
					backgroundColor={backgroundStyle.backgroundColor}
				/>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={backgroundStyle}
				>
				</ScrollView>
			</ErrorBoundary>
		</SafeAreaView>
	);
};


export default App;
