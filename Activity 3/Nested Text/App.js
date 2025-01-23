import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText,] = useState(" [Press this]");
  const bodyText = '';

  const onPressTitle = () => {
    setTitleText(" \n\nMy role in our Sysarch 1 are Documentation and Flowchart Designer. In Sysarch 2 I am the one who designs the UI/UX of our project also I am the member who created our User Manual.");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
        <Text style={styles.nameText}>Jersone</Text>
          <Text style={styles.innerText}> Danao</Text>
          <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text style={styles.paragraphText}>I want to learn more about things also enlarge my <Text style={styles.titleText}>Knowledge</Text> about <Text style={styles.titleText}>CyberSecurity</Text> because that is what I want and that is my passion.</Text>
        <Text numberOfLines={5}>{bodyText}></Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: '',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  innerText: {
    fontSize: 20,
    color: 'red',
  },
  paragraphText: {
    color: 'blue'
  }
});

export default TextInANest;