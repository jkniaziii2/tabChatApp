import React, {useState, useEffect} from 'react';
import {ColorPicker} from 'react-native-color-picker';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

export default function Home() {
  const [backgroundGradientFrom, setBackgroundGradientFrom] =
    useState('#fb8c00');
  const [backgroundGradientTo, setBackgroundGradientTo] = useState('#fb8c00');
  const [stroke, setStroke] = useState('black');
  const [fill, setFill] = useState('red');
  const [graphLineColor, setGraphLine] = useState('white');
  const [labelColor, setLabelColor] = useState('red');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [opacity, setOpacity] = useState(1);
  const [enteredValue, setEnteredValue] = useState(1);
  

  const opacityHandler = () => {
    return setOpacity(Number(enteredValue));
  };
  const editHandler = () => {
    return setEdit(!edit);
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };
  return (
    <ScrollView>
      <LineChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: backgroundGradientFrom,
          backgroundGradientTo: backgroundGradientTo,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => graphLineColor,
          labelColor: () => labelColor,
          propsForDots: {
            r: '6',
            strokeWidth: strokeWidth,
            stroke: stroke,
            fill: fill,
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          opacity: opacity,
        }}
      />

      {
       <View>
        <View>
        <View style={styles.inputPicker}>
          <View>
            <Text>GradientFrom:</Text>
            <ColorPicker
              onColorSelected={color => setBackgroundGradientFrom(color)}
              hideSliders={true}
              style={{width: 125, height: 125}}
            />
          </View>
          <View>
            <Text>GradientTo:</Text>
            <ColorPicker
              onColorSelected={color => setBackgroundGradientTo(color)}
              hideSliders={true}
              style={{width: 125, height: 125}}
            />
          </View>
          <View>
            <Text>DotStroke:</Text>
            <ColorPicker
              onColorSelected={color => setStroke(color)}
              hideSliders={true}
              style={{width: 125, height: 125}}
            />
          </View>
        </View>
        <View style={styles.inputPicker}>
        <View>
            <Text>DotFill:</Text>
            <ColorPicker
              onColorSelected={color => setFill(color)}
              hideSliders={true}
              style={{width: 125, height: 125}}
            />
          </View>
          <View>
            <Text>GraphLine:</Text>
            <ColorPicker
              onColorSelected={color => setGraphLine(color)}
              hideSliders={true}
              style={{width: 125, height: 125}}
            />
          </View>
          <View>
            <Text>LabelColor:</Text>
            <ColorPicker
              onColorSelected={color => setLabelColor(color)}
              hideSliders={true}
              style={{width: 125, height: 125}}
            />
          </View>
        </View>
      </View>
        <View style={styles.inputContainer}>
         <View style={styles.textInput}>
           <Text style={styles.text}>DotStroke Width: </Text>
              <TextInput
              keyboardType="numeric"
              style={styles.innerInput}
              value={strokeWidth.toString()}
              onChangeText={text=>{setStrokeWidth(text)}}  />
           </View>
           <View style={styles.textInput}>
           <Text 
           
           style={styles.text}>Graph Opacity: </Text>
              <TextInput
              keyboardType="numeric"
                style={styles.innerInput} 
                value={enteredValue.toString()}
                onChangeText={(text)=>{setEnteredValue(text)}} 
                onSubmitEditing={opacityHandler}
                />
           </View>
         </View> 
         </View>
         }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
  },
  inputPicker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#fb8c00',
    borderRadius: 10,
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchContainer:{
    alignSelf: 'flex-end',
    zIndex: 2,
    position: 'absolute',
    right: 60,
    flexDirection: "row"
    },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 10,
    flex: 1,
    padding: 5,
    paddingHorizontal: 5,
  },
  buttonEdit:{
    backgroundColor: 'green',
    width: 50,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
},
  input: {
    backgroundColor: 'red',
    borderRadius: 7,
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  innerInput: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});