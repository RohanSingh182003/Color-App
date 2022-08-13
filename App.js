import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  const [color, setColor] = useState([])
  const generateColor = () => {
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let rgb = (`rgb(${red},${green},${blue})`)
    setColor([...color , rgb])
  }
  return (
    <TailwindProvider>
      <SafeAreaView className="mt-10">
        <Text className="text-3xl font-semibold italic text-center my-5">Random Color Generator</Text>
        <TouchableOpacity onPress={() => { generateColor() }}>
          <Text className="p-4 text-white bg-cyan-500 text-center text-2xl">Generate Random Color</Text>
        </TouchableOpacity>
        <View className="flex items-center">
        <FlatList
        showsVerticalScrollIndicator={false}
        data={color}
        keyExtractor={(key)=> key}
        renderItem={({item})=>{
          return(
            <View style={{backgroundColor: item}} className={`my-8 w-48 h-48 rounded-lg`}>
              <Text className="text-center mt-20 text-xl">{item}</Text>
            </View>
          )
        }}
        />
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
