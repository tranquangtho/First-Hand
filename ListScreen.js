import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		image: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		image: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
		image: 'https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-6.jpg'
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
];

export default function ListScreen() {

	const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;

	const renderItem = ({ item }) => (
		<View style={{ width: itemWidth, flex: 1, margin: 5 }}>
			<View>
				<Image
					style={{ height: 350, width: '100%' }}
					source={{
						uri: item.image,
					}}
				/>
				<View style={{
					position: 'absolute', top: 20, right: 20, alignItems: 'center',
					backgroundColor: 'white', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
				}}>
					<Text>Heart</Text>
				</View>
			</View>
			<View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{
						alignItems: 'center', marginTop: 10, borderWidth: 3, borderColor: 'black',
						backgroundColor: 'orange', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
					}}>
						<View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
					</View>

					<View style={{
						alignItems: 'center', marginTop: 10, marginLeft: 10,
						backgroundColor: 'grey', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'
					}}>
					</View>
				</View>
				<Text style={{ fontSize: 20, marginTop: 10 }}>Tshirt blackwinter</Text>
				<Text style={{ fontSize: 20, marginTop: 10 }}>$20.05</Text>
			</View>
		</View>
	);

	return (
		<SafeAreaView>
			<View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
						<Text>Sort By</Text>
						<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Relevance</Text>
					</View>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
						<Text>aaaaa</Text>
						<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Filter</Text>
					</View>
				</View>
				<FlatList
					style={{ marginTop: 20 }}
					data={DATA}
					renderItem={renderItem}
					keyExtractor={item => item.id}
					numColumns={2}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});