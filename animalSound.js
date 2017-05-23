// JavaScript Document
const React = require('react');
const ReactNative = require('react-native');
const {
  Alert,
  Button,
  View,
} = ReactNative;

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native button component.';


exports.examples = [
{
    title: 'Fit to text layout',
    description: 'This layout strategy lets the title define the width of ' +
      'the button',
    render: function() {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            onPress={onButtonPress}
            title="Zvuk zvířete"
            //accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={onButtonPress}
            title="Přehrát znovu"
            color="#841584"
            //accessibilityLabel="Ok, Great!"
          />
        </View>
      );
    },
  }
];