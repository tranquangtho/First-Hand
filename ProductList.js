import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'

const DATA = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First Item',
  image: 'https://studiovietnam.com/wp-content/uploads/2020/06/chup-anh-quang-cao-san-pham-giay-03.jpg'
},
]
export default function ProductList() {
  const { height, width } = Dimensions.get('window');
  // const itemWidth = (width - 15) / 2;

  const renderItem = ({ item }) => (
    <View style={{ width: "100%", flex: 1, margin: 5 }}>
      <View>
        <Image
          style={{ height: 350, width: '100%' }}
          source={{
            uri: item.image,
          }}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList

          style={{ marginTop: 20 }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}>Một đôi giày adidas </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}> $ 20.000</Text>
        <View style={{ backgroundColor: "gray", marginTop: 40, height: 1, width: "75%", marginLeft: 40 }}>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 40, margin: 5 }}>
          <Text style={{ fontSize: 18 }}>color:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>CAMEL</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{
              alignItems: 'center', marginTop: 10, borderWidth: 3, borderColor: 'black',
              backgroundColor: 'orange', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
            }}>
              <View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
            </View>
            <View style={{
              alignItems: 'center', marginTop: 10, marginLeft: 10,
              backgroundColor: 'grey', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'
            }}></View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Text style={{ fontSize: 18 }}>Side:</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>XS</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", margin: 5, padding: 12, justifyContent: "center", alignItems: "center" }}>
            <View style={{ height: 50, width: 70, borderRadius: 5, backgroundColor: "black", margin: 5 }}>
              <Text style={{ color: "white", textAlign: 'center', fontSize: 18, paddingTop: 11 }}>XS</Text>
            </View>
            <View style={{ height: 50, width: 70, borderRadius: 5, backgroundColor: "black", margin: 5 }}>
              <Text style={{ color: "white", textAlign: 'center', fontSize: 18, paddingTop: 11 }}>XS</Text>
            </View>
            <View style={{ height: 50, width: 70, borderRadius: 5, backgroundColor: "black", margin: 5 }}>
              <Text style={{ color: "white", textAlign: 'center', fontSize: 18, paddingTop: 11 }}>XS</Text>
            </View>
            <View style={{ height: 50, width: 70, borderRadius: 5, backgroundColor: "black", margin: 5 }}>
              <Text style={{ color: "white", textAlign: 'center', fontSize: 18, paddingTop: 11 }}>XS</Text>
            </View>
          </View>
        </View>
      <View style={{height:50,width:"75%",backgroundColor:"yellow",marginLeft:"12.5%"}}>
        <Text style={{fontSize: 18,fontWeight: 'bold',textAlign:"center",paddingTop:11}}>Add To cart</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}
