import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { signIn } from '@actions';

import AuthForm from '../components/AuthForm';

const LoginScreen = () => {
	const { container } = styles;
	return (
		<ScrollView
			style={container}
			contentContainerStyle={container}
			showsVerticalScrollIndicator={false}
		>
			<AuthForm variant="register" onSubmit={() => console.log('submit')} />
		</ScrollView>
	);
};

const mapStateToProps = (state: { auth: { pending: any; token: any } }) => ({
	pending: state.auth.pending,

	token: state.auth.token,
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});

export default connect(mapStateToProps, { signIn })(LoginScreen);
