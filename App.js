import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import calculate, { initialState } from './calculate';

class App extends Component {
  state = initialState;

  onPressKey = (type, value) => {
    this.setState(state => calculate(type, value, state));
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#000'} />
        <View style={styles.container}>
          <View style={styles.display}>
            <Text style={styles.displayOutput}>{parseFloat(this.state.currentValue).toLocaleString()}</Text>
          </View>
          <View style={styles.keypad}>

            <View style={styles.keypadRows}>
              <TouchableOpacity onPress={() => this.onPressKey("clear")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { backgroundColor: '#a6a6a6' }]}>
                <Text style={[styles.keypadKey, { color: '#333333' }]}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("plsmin")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { backgroundColor: '#a6a6a6' }]}>
                <Text style={[styles.keypadKey, { color: '#333333' }]}>&#177;</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("per")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { backgroundColor: '#a6a6a6' }]}>
                <Text style={[styles.keypadKey, { color: '#333333' }]}>&#37;</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("operator", "/")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { backgroundColor: '#fe9500' }]}>
                <Text style={styles.keypadKey}>&#247;</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.keypadRows}>
              <TouchableOpacity onPress={() => this.onPressKey("number", 7)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("number", 8)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("number", 9)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("operator", "*")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { backgroundColor: '#fe9500' }]}>
                <Text style={styles.keypadKey}>&#215;</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.keypadRows}>
              <TouchableOpacity onPress={() => this.onPressKey("number", 4)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("number", 5)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("number", 6)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("operator", "-")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { backgroundColor: '#fe9500' }]}>
                <Text style={styles.keypadKey}>&#8722;</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.keypadRows}>
              <TouchableOpacity onPress={() => this.onPressKey("number", 1)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("number", 2)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("number", 3)} activeOpacity={0.8} style={styles.keypadKeyContainer}>
                <Text style={styles.keypadKey}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("operator", "+")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { backgroundColor: '#fe9500' }]}>
                <Text style={styles.keypadKey}>&#43;</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.keypadRows}>
              <TouchableOpacity onPress={() => this.onPressKey("number", 0)} activeOpacity={0.8} style={[styles.keypadKeyContainer, { flex: 9 }]}>
                <Text style={styles.keypadKey}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("number", ".")} activeOpacity={0.8} style={[styles.keypadKeyContainer, { flex: 4 }]}>
                <Text style={styles.keypadKey}>&#8729;</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressKey("equal")} style={[styles.keypadKeyContainer, { flex: 4, backgroundColor: '#fe9500' }]} activeOpacity={0.8}>
                <Text style={styles.keypadKey}>&#61;</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  display: {
    flex: 3,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  displayOutput: {
    margin: 10,
    color: '#fff',
    fontSize: 60,
  },

  keypad: {
    flex: 10,
    backgroundColor: '#000'
  },

  keypadRows: {
    flexDirection: 'row',
    flex: 1
  },

  keypadKeyContainer: {
    backgroundColor: '#333333',
    flex: 1,
    alignItems: 'center',
    borderRadius: 100,
    margin: 10,
    justifyContent: 'center'
  },

  keypadKey: {
    color: '#fff',
    fontSize: 35,
  }
});

export default App;