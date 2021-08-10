import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ProductList from './ProductList'
import DetailProduct from './DetailProduct'
import ListScreen from './ListScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

const App=() =>{
  return (
    <SafeAreaView>
      {/* <Icon name="rocket " size ={30} color="#900" /> */}
      <DetailProduct/>
      <ProductList />
    </SafeAreaView>

  )
}
export default App;