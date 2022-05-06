import { View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';


const Login = (props) => {
  const { navigate, goBack } = props.navigation
  const onSubmit = () => {
    navigate('Age')
  }
  return (
    <View style={styles.root}>
    	<Image source={require('../assets/logo.png')} style={styles.logo}/>
    	<CustomButton
       		onPress={onSubmit}
       		text="begin"
			style={styles.begin}
      	/>
			<Text style={styles.terms}>By signing up you agreed to our <Text style={styles.underline}>Terms & Conditions</Text> and <Text style={styles.underline}>Privacy Policy</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
		width: '100%',
		height: '100%',
    },
    logo: {
		width: 91,
		height: 107,
		top: 288,
		resizeMode: 'contain',
    },
	begin:{
		fontSize: 50,
		textDecorationLine: 'underline',
	},
	terms:{
		position: 'absolute',
		bottom: 48,
		marginHorizontal: 100,
		fontSize: 10,
		textAlign: 'center',
	},
	underline:{
		textDecorationLine: 'underline',
	}
  });

export default Login