import { View, Text } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react';

export default function Screen() {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View >
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  )
}