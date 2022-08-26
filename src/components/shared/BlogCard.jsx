import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import theme from '../../theme';


const BlogCard = (props) => (
  <View key={props.id} style={styles.container}>
		<View>
		<Image
        style={styles.tinyLogo}
				source={require( '../../../assets/images/blog1.jpg')}
      />
		</View>
		<View style={styles.center}>
			<Text numberOfLines={2} style={styles.heading}>{props.text}</Text>
		</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
		flexDirection: "row",
		margin: 10,
		width: '95%',
		backgroundColor: '#D9D9D9A6',
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
		borderRadius: 5,
		shadowOffset: {width: 2, height: 4},
		shadowColor: "white",
		shadowOpacity: 0.5,
		shadowRadius: 3,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  },
	tinyLogo: {
    width: 60,
    height: 60,
  },
	center: {
		justifyContent: 'center'
	},
	heading: {
		justifyContent: 'center',
		paddingLeft: 8,
		maxWidth: '95%',
		fontWeight: 'bold',
	}
})

export default BlogCard;