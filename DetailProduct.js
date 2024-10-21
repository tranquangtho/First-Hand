import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: 'https://www.remoingay.com/uploads/product/product_slide/20200918170904_31881.jpg'
  }
]
export default function DetailProduct() {
  const { height, width } = Dimensions.get('oce win');
  const renderItem = ({ item }) => (
    <View style={{ width: "100%", flex: 1, margin: 5, paddingTop: 10 }}>
      <View>
        <Image style={{ height: 200, width: "90%" }} source={{ uri: item.image }}></Image>
      </View>
    </View>
  )
  return (
    <SafeAreaView>
      <View>
        <Text style={{ paddingTop: 10, marginLeft: 30 }}>Ao Nu Thoi Trang</Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList

            style={{ marginTop: 20, marginLeft: 30 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 40, marginRight: "25%" }}>$39.000</Text>
            <Text style={{ fontSize: 18, paddingTop: 5, }}>SkU: <Text style={{ fontSize: 18, fontWeight: "bold" }}>23423</Text></Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 5 }}>$39.000</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 5 }}>$39.000</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{
                alignItems: 'center', marginTop: 10, borderWidth: 3, borderColor: 'black',
                backgroundColor: 'orange', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
              }}>
                <View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
              </View>
              <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 20 }}>   Qty:1</Text>
              <View style={{
                alignItems: 'center', marginTop: 10, marginLeft: 10,
                backgroundColor: 'grey', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'
              }}></View>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "gray", marginTop: 40, height: 1, width: "75%", marginLeft: 40 }}></View>
        <Text>Have a promo?</Text>
      </View>
    </SafeAreaView>
  )
}
