import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text 
        style={{textAlign: 'center',}}
      >Jersone Danao</Text>
      <View>
        <Text 
        style={{textAlign: 'center',}}
        >AMC 303</Text>
        <Image 
          source={{
            uri:'https://th.bing.com/th/id/OIP.wB1-UZe25zVF7YE6yRA2iwHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7',
            }}
            style={{width: 200, height: 200, alignSelf:'center',}}
        />
      </View>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
      }}
      defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;