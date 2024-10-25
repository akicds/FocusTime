import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {

  return(
    <>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)}/>
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title='15' onPress={() => onChangeTime(15)}/>
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title='20' onPress={() => onChangeTime(20)}/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    marginHorizontal: 20, // Fixed space between buttons
//  flex: 1, // Buttons will take equal space in the row
    alignItems: 'center',
  }
})