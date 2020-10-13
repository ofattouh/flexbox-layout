import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topSectionText}>
            4 N A M E S
          </Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.middleSectionText}>
            I P S U M
          </Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.bottomSectionText}>
            C O M
          </Text>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Setting flex property to 1, cause all children elements to fill all empty space
    // Element to take up all available space, can be set to a positive integer, 0, or -1.
    flex: 1,
  },
  topSection: {
    // how much of the available space each element should take up
    flexGrow: 3,
    backgroundColor: '#5BC2C1',
    alignItems: 'center', // centered along the x axis
  },
  topSectionText: {
    fontWeight: 'bold',
    marginTop: 50
  },
  middleSection: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center', // justified along the y axis (center)
    alignItems: 'center',
  },
  middleSectionText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  bottomSection: {
    flexGrow: 3,
    backgroundColor: '#FD909E',
    alignItems: 'center',
    justifyContent: 'flex-end' // justified along the y axis (end)
  },
  bottomSectionText: {
    fontWeight: 'bold',
    marginBottom: 30
  }
});

// When using flexbox, we have two directions to lay out child content (flexDirection):
// row: This allows children of the container horizontally.
// column: This allows children of the container vertically (default direction)

// When flex is a positive number, it makes the component flexible and it'll be sized
// proportional to its flex value. So, component with flex set to 2 will take twice space as
// component with flex set to 1. When flex is 0, the component is sized according to width
// and height and is inflexible. When flex is -1, the component is normally sized according
// width and height, if there's no space, component will shrink to minWidth and minHeight

// package.json
// expo init my-app
// expo start my-app
