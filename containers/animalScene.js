import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AnimalScene from '../scenes/animalScene';
import {setReaderLevel} from '../actions'

import animals from '../animals';

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setReaderLevel,
  }, dispatch);
}

class AnimalContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    const animalName = navigation.state.params.animal;

    if (!(animalName in animals)) {
      return ({
        title: `Chybný QR kód`,
      })
    } else {
      return ({
        title: `${animals[animalName].name}`,
      })
    }
  }

  render() {
    return (
        <AnimalScene
          animal={this.props.navigation.state.params.animal}
          readerLevel={this.props.configuration.readerLevel}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer)
