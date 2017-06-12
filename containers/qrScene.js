import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import QrScene from '../scenes/qrScene';
import {setCameraReady} from '../actions'

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCameraReady,
  }, dispatch);
}

class QRContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
      return ({
        title: `XYZ QR kód`,
      });
  };

  render() {
    return (
        <QrScene
          cameraReady={this.props.configuration.cameraReady}
          cameraChange={this.props.setCameraReady}
          navigation={this.props.navigation}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QRContainer)
