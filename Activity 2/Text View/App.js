import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Jersone Danao");
  const bodyText = 'My role in our Sysarch 1 are Documentation and Flowchart Designer. In Sysarch 2 I am the one who designs the UI/UX of our project also I am the member who created our User Manual. I want to learn more about things also enlarge my knowledge about CyberSecurity because that is what I want and that is my passion. ';

  const onPressTitle = () => {
    setTitleText("Jersone Danao");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
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
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;